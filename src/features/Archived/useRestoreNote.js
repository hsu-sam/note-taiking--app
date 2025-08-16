import { useMutation, useQueryClient } from "@tanstack/react-query";
import { restoreNote } from "../../services/apiNote";
import toast from "react-hot-toast";

export function useRestoreNote({ onSuccess } = {}) {
  const queryClient = useQueryClient();

  const { mutate: restore, isLoading: isRestoring } = useMutation({
    mutationFn: restoreNote,
    onSuccess: (data) => {
      toast.success("Note restored successfully");
      console.log("Restored note:", data);

      // Invalidate both queries to refresh the lists
      queryClient.invalidateQueries(["note"]);
      queryClient.invalidateQueries(["archivedNotes"]);

      if (onSuccess) onSuccess();
    },
    onError: (err) => {
      console.error("Restore failed:", err.message);
      toast.error("Failed to restore note");
    },
  });

  return { restore, isRestoring };
}
