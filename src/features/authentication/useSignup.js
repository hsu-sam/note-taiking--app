import { useMutation } from "@tanstack/react-query";
// import { signUp as signupApi } from "../../pages/SignUp";
import toast from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account created succesfully! Please verify your address");
    },
  });
  return { signup, isLoading: isPending };
}
