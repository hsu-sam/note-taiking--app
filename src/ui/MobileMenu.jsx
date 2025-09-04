import { NavLink } from "react-router-dom";

function MobileMenu() {
  return (
    <div className="">
      <NavLink to="all-notes" className="">
        <div>
          <span>Home</span>
        </div>
      </NavLink>
      <NavLink to="search" className="">
        <div>
          <span>Search</span>
        </div>
      </NavLink>
      <NavLink to="archived-notes" className="">
        <div>
          <span>Archived</span>
        </div>
      </NavLink>
      <NavLink to="tags" className="">
        <div>
          <span>Tags</span>
        </div>
      </NavLink>
      <NavLink to="settings" className="">
        <div>
          <span>Setting</span>
        </div>
      </NavLink>
    </div>
  );
}

export default MobileMenu;
