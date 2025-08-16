import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Loading from "./Loading";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the autthenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 2. If there is no authenticated user. redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  // 3. While loading, showw a spinner
  if (isLoading)
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <Loading />
      </div>
    );

  // 4. If there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
