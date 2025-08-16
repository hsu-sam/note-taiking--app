import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteNote as deleteNoteApi } from "../../services/apiNote";

export function useDeleteArchivedNote({ onSuccess = {} }) {
  const queryClient = useQueryClient();

  const { isLoading: isDeletingArchiveNote, mutate: deleteArchiveNote } =
    useMutation({
      mutationFn: deleteNoteApi,
      onSuccess: () => {
        toast.success("Archived note deleted successfully");
        queryClient.invalidateQueries({ queryKey: ["note"] });
        queryClient.invalidateQueries({ queryKey: ["archivedNotes"] });

        if (onSuccess) onSuccess();
      },
      onError: (err) => toast.error(err.message),
    });
  return { isDeletingArchiveNote, deleteArchiveNote };
}
