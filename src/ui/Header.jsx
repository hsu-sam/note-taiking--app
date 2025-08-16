import { NavLink } from "react-router-dom";
// import Input from "./Input";
import SearchNote from "./SearchNote";

function Header({ onSearch, searchQuery = "", selectedTag }) {
  return (
    <header className="flex items-center justify-between border-b border-neutral-200 px-8 py-3 dark:border-neutral-800">
      <h1 className="text-2xl font-bold text-neutral-700 dark:text-white">
        {selectedTag
          ? `Notes Tagged: ${selectedTag}`
          : searchQuery.trim()
            ? `Showing results for: ${searchQuery}`
            : "All Notes"}
      </h1>
      <div className="relative flex items-center justify-between gap-5">
        <SearchNote onSearch={onSearch} />
        <NavLink to="/settings">
          <img src="/svgs/setting.svg" alt="Settings" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
