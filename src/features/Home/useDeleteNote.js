import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote as deleteNoteApi } from "../../services/apiNote";
import toast from "react-hot-toast";

export function useDeleteNote({ onClose }) {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteNote } = useMutation({
    mutationFn: deleteNoteApi,
    onSuccess: () => {
      toast.success("Note deleted sucessfully");
      queryClient.invalidateQueries({ queryKey: ["note"] }); // refresh list
      onClose(); // close the form
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteNote };
}
