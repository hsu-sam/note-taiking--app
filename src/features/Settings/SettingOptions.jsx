import { Link, NavLink } from "react-router-dom";

import { useIsDarkMode } from "../../context/DarkModeContext";
import Logout from "../../ui/Logout";

function SettingOptions() {
  const isDarkMode = useIsDarkMode();
  const chevronSvg = isDarkMode ? (
    <img src="/svgs/chevron-right-dark.svg" alt="" />
  ) : (
    <img src="/svgs/chevron-right.svg" alt="" />
  );

  return (
    <div className="flex h-screen flex-col gap-[8px] border-r border-neutral-200 px-[16px] py-[20px] dark:border-neutral-800">
      <div className="border-b border-neutral-200 dark:border-neutral-800">
        <NavLink to="color-theme">
          {({ isActive }) => (
            <div
              className={`rounded-0.375rem flex w-full justify-between gap-[8px] rounded p-[8px] transition ${
                isActive ? "bg-neutral-200 dark:bg-neutral-800" : ""
              }`}
            >
              <div className="flex gap-[8px]">
                {!isDarkMode ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0548 2.99994V4.37184M12.0548 19.628V20.9999M21.0547 12H19.6828M4.42659 12H3.05469M18.4185 5.63576L17.4485 6.60583M6.66105 17.3937L5.69099 18.3638M18.4185 18.3638L17.4485 17.3937M6.66105 6.6063L5.69099 5.63624"
                      stroke="#0E121B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0549 7.80463C14.3725 7.80463 16.2504 9.68345 16.2504 12.0001C16.2504 14.3177 14.3725 16.1965 12.0549 16.1965C9.73723 16.1965 7.85938 14.3177 7.85938 12.0001C7.85938 9.68345 9.73723 7.80463 12.0549 7.80463Z"
                      stroke="#0E121B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0548 2.99994V4.37184M12.0548 19.628V20.9999M21.0547 12H19.6828M4.42659 12H3.05469M18.4185 5.63576L17.4485 6.60583M6.66105 17.3937L5.69099 18.3638M18.4185 18.3638L17.4485 17.3937M6.66105 6.6063L5.69099 5.63624"
                      stroke="#FFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0549 7.80463C14.3725 7.80463 16.2504 9.68345 16.2504 12.0001C16.2504 14.3177 14.3725 16.1965 12.0549 16.1965C9.73723 16.1965 7.85938 14.3177 7.85938 12.0001C7.85938 9.68345 9.73723 7.80463 12.0549 7.80463Z"
                      stroke="#FFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <span>Color Theme</span>
              </div>
              {isActive && chevronSvg}
            </div>
          )}
        </NavLink>

        <NavLink to="font-theme">
          {({ isActive }) => (
            <div
              className={`rounded-0.375rem flex w-full justify-between gap-[8px] rounded p-[8px] transition ${
                isActive ? "bg-neutral-200 dark:bg-neutral-800" : ""
              }`}
            >
              <div className="flex gap-[8px]">
                {!isDarkMode ? (
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
                      d="M20.9989 10.9786H14.6309C14.0789 10.9786 13.6309 11.4256 13.6309 11.9786V13.1086C13.6309 13.6616 14.0789 14.1086 14.6309 14.1086C15.1829 14.1086 15.6309 13.6616 15.6309 13.1086V12.9786H16.7849V17.3876H16.3949C15.8429 17.3876 15.3949 17.8346 15.3949 18.3876C15.3949 18.9406 15.8429 19.3876 16.3949 19.3876H19.2359C19.7879 19.3876 20.2359 18.9406 20.2359 18.3876C20.2359 17.8346 19.7879 17.3876 19.2359 17.3876H18.7849V12.9786H19.9989V13.1086C19.9989 13.6616 20.4469 14.1086 20.9989 14.1086C21.5509 14.1086 21.9989 13.6616 21.9989 13.1086V11.9786C21.9989 11.4256 21.5509 10.9786 20.9989 10.9786Z"
                      fill="#0E121B"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.185 17.3884H10.29V6.60942H14.705V7.85942C14.705 8.41142 15.153 8.85942 15.705 8.85942C16.257 8.85942 16.705 8.41142 16.705 7.85942V5.60942C16.705 5.05642 16.257 4.60942 15.705 4.60942H2.99902C2.44702 4.60942 1.99902 5.05642 1.99902 5.60942V7.85942C1.99902 8.41142 2.44702 8.85942 2.99902 8.85942C3.55102 8.85942 3.99902 8.41142 3.99902 7.85942V6.60942H8.29002V17.3884H6.51702C5.96502 17.3884 5.51702 17.8354 5.51702 18.3884C5.51702 18.9414 5.96502 19.3884 6.51702 19.3884H12.185C12.737 19.3884 13.185 18.9414 13.185 18.3884C13.185 17.8354 12.737 17.3884 12.185 17.3884Z"
                      fill="#0E121B"
                    />
                  </svg>
                ) : (
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
                      d="M20.9989 10.9786H14.6309C14.0789 10.9786 13.6309 11.4256 13.6309 11.9786V13.1086C13.6309 13.6616 14.0789 14.1086 14.6309 14.1086C15.1829 14.1086 15.6309 13.6616 15.6309 13.1086V12.9786H16.7849V17.3876H16.3949C15.8429 17.3876 15.3949 17.8346 15.3949 18.3876C15.3949 18.9406 15.8429 19.3876 16.3949 19.3876H19.2359C19.7879 19.3876 20.2359 18.9406 20.2359 18.3876C20.2359 17.8346 19.7879 17.3876 19.2359 17.3876H18.7849V12.9786H19.9989V13.1086C19.9989 13.6616 20.4469 14.1086 20.9989 14.1086C21.5509 14.1086 21.9989 13.6616 21.9989 13.1086V11.9786C21.9989 11.4256 21.5509 10.9786 20.9989 10.9786Z"
                      fill="#FFF"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.185 17.3884H10.29V6.60942H14.705V7.85942C14.705 8.41142 15.153 8.85942 15.705 8.85942C16.257 8.85942 16.705 8.41142 16.705 7.85942V5.60942C16.705 5.05642 16.257 4.60942 15.705 4.60942H2.99902C2.44702 4.60942 1.99902 5.05642 1.99902 5.60942V7.85942C1.99902 8.41142 2.44702 8.85942 2.99902 8.85942C3.55102 8.85942 3.99902 8.41142 3.99902 7.85942V6.60942H8.29002V17.3884H6.51702C5.96502 17.3884 5.51702 17.8354 5.51702 18.3884C5.51702 18.9414 5.96502 19.3884 6.51702 19.3884H12.185C12.737 19.3884 13.185 18.9414 13.185 18.3884C13.185 17.8354 12.737 17.3884 12.185 17.3884Z"
                      fill="#FFF"
                    />
                  </svg>
                )}
                <span>Font Theme</span>
              </div>
              {isActive && chevronSvg}
            </div>
          )}
        </NavLink>

        <NavLink to="change-password">
          {({ isActive }) => (
            <div
              className={`rounded-0.375rem flex w-full justify-between gap-[8px] rounded p-[8px] transition ${
                isActive ? "bg-neutral-200 dark:bg-neutral-800" : ""
              }`}
            >
              <div className="flex gap-[8px]">
                {!isDarkMode ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4237 9.4478V7.3008C16.4237 4.7878 14.3857 2.74975 11.8727 2.74975C9.35973 2.7388 7.31373 4.7668 7.30273 7.2808V7.3008V9.4478"
                      stroke="#0E121B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.683 21.2496H8.042C5.948 21.2496 4.25 19.5526 4.25 17.4576V13.1686C4.25 11.0736 5.948 9.3766 8.042 9.3766H15.683C17.777 9.3766 19.475 11.0736 19.475 13.1686V17.4576C19.475 19.5526 17.777 21.2496 15.683 21.2496Z"
                      stroke="#0E121B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.8623 14.2027V16.4237"
                      stroke="#0E121B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4237 9.4478V7.3008C16.4237 4.7878 14.3857 2.74975 11.8727 2.74975C9.35973 2.7388 7.31373 4.7668 7.30273 7.2808V7.3008V9.4478"
                      stroke="#FFF"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.683 21.2496H8.042C5.948 21.2496 4.25 19.5526 4.25 17.4576V13.1686C4.25 11.0736 5.948 9.3766 8.042 9.3766H15.683C17.777 9.3766 19.475 11.0736 19.475 13.1686V17.4576C19.475 19.5526 17.777 21.2496 15.683 21.2496Z"
                      stroke="#FFF"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.8623 14.2027V16.4237"
                      stroke="#FFF"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <span>Change Password</span>
              </div>
              {isActive && chevronSvg}
            </div>
          )}
        </NavLink>
      </div>
      <Logout />
    </div>
  );
}

export default SettingOptions;
