import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditNote } from "../../services/apiNote";
import toast from "react-hot-toast";

export function useEditArchivedNote({ onSuccess }) {
  const queryClient = useQueryClient();

  const { mutate: editArchivedNote, isLoading: isEditingArchivedNote } =
    useMutation({
      mutationFn: ({ newArchivedNoteData, id }) =>
        createEditNote(newArchivedNoteData, id),
      onSuccess: () => {
        toast.success("Archived note successfully edited");
        queryClient.invalidateQueries({ query: ["archivedNotes"] });
        if (onSuccess) onSuccess();
      },
      onError: (err) => toast.error(err.message),
    });
  return { editArchivedNote, isEditingArchivedNote };
}
