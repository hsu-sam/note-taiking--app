import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditNote } from "../../services/apiNote";
import toast from "react-hot-toast";

import Label from "../../ui/Label";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import InteractiveButton from "../../ui/InteractiveButton";

function CreateNote({ noteToEdit = {}, onClose }) {
  const { id: editId, created_at, ...editValues } = noteToEdit || {};

  const isEditSession = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
    // mode: "onChange", // real-time validation,
  });
  const queryClient = useQueryClient();

  const { mutate: createNote, isLoading: isCreating } = useMutation({
    mutationFn: createEditNote,
    onSuccess: () => {
      toast.success("New note successfully created");
      queryClient.invalidateQueries({ queryKey: ["note"] });
      reset();

      if (onClose) onClose();
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: editNote, isLoading: isEditing } = useMutation({
    mutationFn: ({ newNoteData, id }) => createEditNote(newNoteData, id),
    onSuccess: () => {
      toast.success("Note successfully edited");
      queryClient.invalidateQueries({ queryKey: ["note"] });
      reset();
      if (onClose) onClose();
    },
    onError: (err) => toast.error(err.message),
  });

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    if (isEditSession) editNote({ newNoteData: { ...data }, id: editId });
    else createNote(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid h-full grid-cols-[3fr_1fr]"
    >
      <div className="mx-2 flex flex-col gap-3 border-r border-neutral-200 px-5 py-4 dark:border-neutral-800">
        <Input
          id="title"
          placeholder="Enter a title"
          className="text-[24px] font-bold"
          variant="subtle"
          type="large"
          {...register("title", { required: true })}
        />

        <div className="flex flex-col gap-3 border-b border-neutral-200 pb-4 dark:border-neutral-800">
          <div>
            <Label
              htmlFor="tags"
              className="flex items-center justify-between gap-30"
            >
              <div className="flex items-center gap-2">
                <img src="/svgs/tag.svg" alt="" />
                <span className="text-neutral-700 dark:text-neutral-300">
                  Tags
                </span>
              </div>
              <Input
                id="tags"
                className="border-0"
                size="small"
                placeholder="Add tags separated by commas(e.g. Work, Planning)"
                {...register("tags", { required: true })}
              />
            </Label>
          </div>

          <div>
            <Label htmlFor="Last edited" className="flex items-center gap-13">
              <div className="flex items-center gap-2">
                <img src="/svgs/circle-clock.svg" alt="" />
                <span className="text-neutral-700 dark:text-neutral-300">
                  Last edited
                </span>
              </div>
              <p className="text-neutral-400 dark:text-neutral-300">
                {isEditSession
                  ? new Date(created_at).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                  : "Not yet edited"}
              </p>
            </Label>
          </div>
        </div>

        <div>
          <textarea
            id="note_text"
            rows={4}
            className="mt-4 h-screen w-full resize-none rounded border-0 border-neutral-400 p-2 focus:outline-neutral-500 dark:border-neutral-800"
            placeholder="Start typing your name here..."
            {...register("note_text", { required: true })}
          ></textarea>
        </div>

        <div className="flex items-center gap-5">
          <Button disabled={!isValid || isWorking}>Save Note</Button>
          <Button variant="secondary" type="reset" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
      {isEditSession && <InteractiveButton noteId={editId} onClose={onClose} />}
    </form>
  );
}

export default CreateNote;
