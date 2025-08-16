import { NavLink } from "react-router-dom";
import NoteDetails from "../features/Home/NoteDetails";
import Tags from "./Tags";
import { useIsDarkMode } from "../context/DarkModeContext";

function Sidebar({ selectedTag, setSelectedTag }) {
  const isDarkMode = useIsDarkMode();
  const src = isDarkMode ? "/svgs/logo-dark.svg" : "/svgs/logo.svg";
  const chevronSvg = isDarkMode
    ? "svgs/chevron-right-dark.svg"
    : "svgs/chevron-right.svg";

  return (
    <aside className="row-span-full flex h-screen flex-col border-r border-neutral-200 px-3 py-2 dark:border-neutral-800">
      <div className="py-1.5 pb-5">
        <img src={src} alt="Logo" />
      </div>
      <nav className="flex flex-col gap-3 border-b border-neutral-200 pb-3 dark:border-neutral-800">
        <ul>
          <li>
            <NavLink
              to="/all-notes"
              className={({ isActive }) =>
                `flex items-center justify-between rounded px-4 py-2 transition ${
                  isActive ? "bg-blue-50 dark:bg-neutral-700" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center justify-between gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.49609 8.02539C4.9103 8.02539 5.24609 8.36118 5.24609 8.77539V17.4504C5.24609 18.7282 6.2822 19.7643 7.55998 19.7643H16.4393C17.7171 19.7643 18.7532 18.7282 18.7532 17.4504V8.77539C18.7532 8.36118 19.089 8.02539 19.5032 8.02539C19.9174 8.02539 20.2532 8.36118 20.2532 8.77539V17.4504C20.2532 19.5566 18.5455 21.2643 16.4393 21.2643H7.55998C5.45377 21.2643 3.74609 19.5566 3.74609 17.4504V8.77539C3.74609 8.36118 4.08188 8.02539 4.49609 8.02539Z"
                        fill={isActive ? "#335cff" : "#717784"}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.0609 3.41024C11.1975 2.51169 12.8026 2.51169 13.9392 3.41024L21.4655 9.36806C21.7903 9.62515 21.8452 10.0968 21.5881 10.4216C21.331 10.7464 20.8593 10.8013 20.5345 10.5442L13.009 4.58696C13.0088 4.58685 13.0091 4.58706 13.009 4.58696C12.4177 4.11979 11.5825 4.11955 10.9912 4.58685C10.9912 4.58688 10.9913 4.58681 10.9912 4.58685L3.46553 10.5442C3.14076 10.8013 2.66907 10.7464 2.41198 10.4216C2.15489 10.0968 2.20975 9.62515 2.53453 9.36806L10.0609 3.41024Z"
                        fill={isActive ? "#335cff" : "#717784"}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.668 4.19336C18.0822 4.19336 18.418 4.52915 18.418 4.94336V7.29688C18.418 7.71109 18.0822 8.04688 17.668 8.04688C17.2538 8.04688 16.918 7.71109 16.918 7.29688V4.94336C16.918 4.52915 17.2538 4.19336 17.668 4.19336Z"
                        fill={isActive ? "#335cff" : "#717784"}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9742 13.6875H12.0292C12.406 13.6875 12.7311 13.6875 12.9992 13.7084C13.282 13.7304 13.5638 13.779 13.8371 13.9108C14.2955 14.1319 14.6654 14.5018 14.8865 14.9602C15.0183 15.2335 15.0669 15.5153 15.0889 15.7981C15.1098 16.0662 15.1098 16.3913 15.1098 16.7681V20.5142C15.1098 20.9284 14.774 21.2642 14.3598 21.2642C13.9456 21.2642 13.6098 20.9284 13.6098 20.5142V16.7956C13.6098 16.3835 13.6093 16.1175 13.5935 15.9146C13.5783 15.72 13.5525 15.6472 13.5354 15.6117C13.4617 15.4589 13.3384 15.3356 13.1856 15.2619C13.1501 15.2448 13.0773 15.219 12.8827 15.2038C12.6798 15.188 12.4138 15.1875 12.0017 15.1875C11.5896 15.1875 11.3235 15.188 11.1207 15.2038C10.926 15.219 10.8533 15.2448 10.8178 15.2619C10.665 15.3356 10.5417 15.4589 10.468 15.6117C10.4509 15.6472 10.4251 15.72 10.4099 15.9146C10.3941 16.1175 10.3936 16.3835 10.3936 16.7956V20.5142C10.3936 20.9284 10.0578 21.2642 9.64356 21.2642C9.22934 21.2642 8.89356 20.9284 8.89356 20.5142V16.7681C8.89354 16.3913 8.89353 16.0662 8.91443 15.7981C8.93648 15.5153 8.9851 15.2335 9.11688 14.9602C9.33793 14.5018 9.70786 14.1319 10.1663 13.9108C10.4396 13.779 10.7213 13.7304 11.0041 13.7084C11.2723 13.6875 11.5974 13.6875 11.9742 13.6875Z"
                        fill={isActive ? "#335cff" : "#717784"}
                      />
                    </svg>
                    <span className="dark:text-white">All Notes</span>
                  </div>
                  {isActive ? <img src={chevronSvg} alt="" /> : ""}
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/archived-notes"
              className={({ isActive }) =>
                `flex items-center justify-between gap-2 rounded px-4 py-2 ${
                  isActive ? "bg-blue-50 dark:bg-neutral-700" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center justify-between gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 7.78216V16.2169C21 19.165 18.9188 21 15.9736 21H8.02638C5.08119 21 3 19.165 3 16.2159V7.78216C3 4.83405 5.08119 3 8.02638 3H15.9736C18.9188 3 21 4.84281 21 7.78216Z"
                        stroke={isActive ? "#335cff" : "#717784"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 14L11.9982 17L9 14"
                        stroke={isActive ? "#335cff" : "#717784"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.998 17V10"
                        stroke={isActive ? "#335cff" : "#717784"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.9336 7H3.05859"
                        stroke={isActive ? "#335cff" : "#717784"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="dark:text-white">Archived Notes</span>
                  </div>
                  {isActive ? <img src={chevronSvg} alt="" /> : ""}
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      </div>
    </aside>
  );
}

export default Sidebar;
