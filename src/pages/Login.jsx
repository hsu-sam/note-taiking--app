import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6 max-md:px-3 dark:bg-neutral-700">
      <LoginForm />
    </div>
  );
}

export default Login;
