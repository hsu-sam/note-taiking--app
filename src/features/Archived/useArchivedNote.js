import { useMutation, useQueryClient } from "@tanstack/react-query";
import { archiveNote } from "../../services/apiNote";
import toast from "react-hot-toast";

export function useArchiveNote({ onSuccess }) {
  const queryClient = useQueryClient();

  const { mutate: archive, isLoading: isArchiving } = useMutation({
    mutationFn: archiveNote,
    onSuccess: () => {
      toast.success("Note successfully archived");
      queryClient.invalidateQueries(["note"]);
      queryClient.invalidateQueries(["archivedNotes"]);
      if (onSuccess) onSuccess();
    },
    onError: (err) => {
      console.error("Archiving failed:", err.message);
    },
  });

  return { archive, isArchiving };
}
