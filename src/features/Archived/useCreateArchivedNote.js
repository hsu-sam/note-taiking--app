import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditNote } from "../../services/apiNote";
import toast from "react-hot-toast";

export function useCreateArchiveNote({ onSuccess }) {
  const queryClient = useQueryClient();

  const { mutate: createArchivedNote, isLoading: isCreating } = useMutation({
    mutationFn: (noteData) => {
      const archivedNoteData = { ...noteData, archived: true };
      return createEditNote(archivedNoteData);
    },
    onSuccess: () => {
      toast.success("Archived note created successfully");
      queryClient.invalidateQueries(["archivedNotes"]);
      queryClient.invalidateQueries(["note"]);

      if (onSuccess) onSuccess();
    },

    onError: (err) => {
      console.error("Failed to create archived note:", err);
      toast.error("Failed to create archived note");
    },
  });

  return { createArchivedNote, isCreating };
}
