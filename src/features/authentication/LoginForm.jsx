import { Link, NavLink } from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useIsDarkMode } from "../../context/DarkModeContext";
import { useState } from "react";
import { useLogin } from "./useLogin";
import LoadingMini from "../../ui/LoadingMini";

function LoginForm() {
  const [email, setEmail] = useState("sam@example.com");
  const [password, setPassword] = useState("Sam@1234");
  const { login, isLoading } = useLogin();
  const isDarkMode = useIsDarkMode();

  const showSrc = !isDarkMode ? (
    <img
      src="/svgs/show.svg"
      alt="Toggle visibility"
      className="absolute top-7.5 right-3 cursor-pointer"
      // onClick={() => setShowOld(!showOld)}
    />
  ) : (
    <img
      src="/svgs/show-dark.svg"
      alt="Toggle visibility"
      className="absolute top-8 right-3 cursor-pointer"
      // onClick={() => setShowOld(!showOld)}
    />
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <div className="b flex w-[540px] flex-col gap-[16px] rounded-lg bg-white p-[48px] max-md:px-[16px] dark:bg-neutral-950">
      <div className="flex items-center justify-center">
        {!isDarkMode ? (
          <img src="/svgs/logo.svg" alt="Logo" />
        ) : (
          <img src="/svgs/logo-dark.svg" alt="Logo" />
        )}
      </div>

      <div>
        <h1 className="text-center text-[24px] font-bold">Welcome to note</h1>
        <p className="font-regular text-center text-[14px] text-neutral-600">
          Login to continue.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
        <div>
          <label htmlFor="email">Email address</label>
          <Input
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
            disabled={isLoading}
          />
        </div>

        <div className="relative">
          <div className="flex justify-between">
            <label htmlFor="password">Password</label>
            <span className="text-neutral-600 underline">Forgot</span>
          </div>
          <Input
            id="password"
            autoComplete="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          {showSrc}
        </div>

        <Button disabled={isLoading} className="w-full text-white">
          {!isLoading ? "Login" : <LoadingMini />}
        </Button>
      </form>

      <div>
        <p className="text-center text-neutral-600">
          No account yet?{" "}
          <NavLink
            to="/signup"
            className="text-neutral-950 dark:text-neutral-50"
          >
            Signup
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
