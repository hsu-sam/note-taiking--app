import { NavLink } from "react-router-dom";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useIsDarkMode } from "../../context/DarkModeContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import LoadingMini from "../../ui/LoadingMini";

function SignupForm() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();
  const [showPassword, setShowPassword] = useState(false);
  const isDarkMode = useIsDarkMode();

  const showSrc = !isDarkMode ? (
    <img
      src="/svgs/show.svg"
      alt="Toggle visibility"
      className="absolute top-7.5 right-3 cursor-pointer"
      onClick={() => setShowPassword(!showPassword)}
    />
  ) : (
    <img
      src="/svgs/show-dark.svg"
      alt="Toggle visibility"
      className="absolute top-7.5 right-3 cursor-pointer"
      onClick={() => setShowPassword(!showPassword)}
    />
  );
  function onSubmit(data) {
    // console.log(data);
    signup(
      { email: data.email, password: data.password },
      { onSettled: () => reset() },
    );
  }
  return (
    <div className="flex w-[540px] flex-col gap-[16px] rounded-lg bg-white p-[48px] max-md:px-[16px] dark:bg-neutral-950">
      <div className="flex items-center justify-center">
        {!isDarkMode ? (
          <img src="/svgs/logo.svg" alt="Logo" />
        ) : (
          <img src="/svgs/logo-dark.svg" alt="Logo" />
        )}
      </div>

      <div>
        <h1 className="text-center text-[24px] font-bold">
          Create your account
        </h1>
        <p className="font-regular text-center text-[14px] text-neutral-600">
          Sign up to start organizing your notes and boost your productivity.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[16px]"
      >
        <div>
          <label htmlFor="email" error={errors?.email?.message}>
            Email address
          </label>
          <Input
            disabled={isLoading}
            className={errors?.password ? "border-red-500" : ""}
            id="email"
            type="email"
            autoComplete="username"
            placeholder="email@example.com"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors?.email && (
            <p className="mt-1 text-[12px] text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="relative">
          <label htmlFor="password" ror={errors?.password?.message}>
            Password
          </label>
          <div className="flex flex-col justify-between">
            <Input
              disabled={isLoading}
              className={errors?.password ? "border-red-500" : ""}
              id="password"
              autoComplete="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimun of 8 characters",
                },
              })}
            />
            {showSrc}
            <div className="mt-1 flex items-center gap-1 text-xs text-neutral-500">
              {!isDarkMode ? (
                <img src="/svgs/info-circle.svg" alt="Info" />
              ) : (
                <img src="/svgs/info-circle-dark.svg" alt="Info" />
              )}
              {errors?.password ? (
                <p className="text-red-600">{errors.password.message}</p>
              ) : (
                <span>At least 8 characters</span>
              )}
            </div>
          </div>
        </div>

        <Button disabled={isLoading} className="w-full text-white">
          {isLoading ? <LoadingMini /> : "Sign up"}
        </Button>
      </form>

      <div>
        <p className="text-center text-neutral-600">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-neutral-950 dark:text-neutral-50"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
