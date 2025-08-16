import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3 p-4 text-center text-3xl">
      <p>This Page Not Found 😥</p>
      <p>Please go back to the home page</p>
      <NavLink
        to="/all-notes"
        className="rounded-2xl bg-blue-500 px-3 py-1 text-white"
      >
        Home
      </NavLink>
    </div>
  );
}

export default PageNotFound;
