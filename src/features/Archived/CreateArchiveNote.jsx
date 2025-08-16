import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import IteractiveArchiveButton from "../../features/Archived/IteractiveArchiveButton";
import { useCreateArchiveNote } from "./useCreateArchivedNote";
import { useEditArchivedNote } from "./useEditArchivedNote";

function CreateArchiveNote({ noteToEdit = {}, onClose }) {
  const { id: editId, created_at, ...editValues } = noteToEdit || {};

  const isEditSession = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    defaultValues: isEditSession
      ? editValues
      : { title: "", tags: "", note_text: "" },
  });

  const { createArchivedNote, isCreating } = useCreateArchiveNote({
    onSuccess: () => {
      reset();
      if (onClose) onClose();
    },
  });

  const { editArchivedNote, isEditingArchivedNote } = useEditArchivedNote({
    onSuccess: () => {
      reset();
      if (onClose) onClose();
    },
  });

  const onSubmit = (data) => {
    const noteData = {
      title: data.title,
      note_text: data.note_text,
      tags: data.tags || "",
      archived: true,
      created_at: isEditSession ? created_at : new Date().toISOString(),
    };
    if (isEditSession) {
      editArchivedNote({ newArchivedNoteData: noteData, id: editId });
    } else {
      createArchivedNote(noteData);
    }
  };

  const isWorking = isCreating || isEditingArchivedNote;
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
                <span className="text-neutral-700">Tags</span>
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
                <span className="text-neutral-700">Last edited</span>
              </div>
              <p className="text-neutral-400">Not yet edited</p>
            </Label>
          </div>
        </div>

        <div>
          <textarea
            id="content"
            rows={4}
            className="mt-4 h-screen w-full resize-none rounded border-0 border-neutral-400 p-2 outline focus:outline-neutral-500"
            placeholder="Start typing your name here..."
            {...register("note_text", { required: true })}
          ></textarea>
        </div>

        <div className="flex items-center gap-5">
          <Button disabled={!isValid || isWorking}>Save Note</Button>
          <Button
            variant="secondary"
            // type="reset"
            onClick={onClose}
            type="button"
          >
            Cancel
          </Button>
        </div>
      </div>
      {isEditSession && (
        <IteractiveArchiveButton noteId={editId} onClose={onClose} />
      )}
    </form>
  );
}

export default CreateArchiveNote;
