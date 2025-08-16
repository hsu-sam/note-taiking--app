// import { QueryClient, useMutation } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import { createEditNote } from "../../services/apiNote";

// export function useCreateNote() {
//   const { mutate: createNote, isLoading: isCreating } = useMutation({
//     mutationFn: createEditNote,
//     onSuccess: () => {
//       toast.success("New note successfully created");
//       QueryClient.invalidateQueries({ queryKey: ["note"] });
//     },
//     onError: (err) => toast.error(err.message),
//   });

//   return { isCreating, createNote };
// }
