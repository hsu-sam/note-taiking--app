import Button from "../../ui/Button";
import { useDarkMode, useIsDarkMode } from "../../context/DarkModeContext";

function ColorTheme() {
  const { selectedTheme, setSelectedTheme, applySelectedTheme } = useDarkMode();
  const isDarkMode = useIsDarkMode();

  function handleApply() {
    applySelectedTheme();
  }

  return (
    <div className="rounded-1 m-8 flex w-[528px] flex-col gap-[24px]">
      <div className="flex flex-col gap-[4px]">
        <h2 className="text-base font-semibold text-neutral-950 dark:text-white">
          Color Theme
        </h2>
        <p className="text-sm font-normal text-neutral-700 dark:text-neutral-300">
          Choose your color theme:
        </p>
      </div>

      <div className="flex flex-col gap-[16px]">
        <label
          className={`flex cursor-pointer items-center justify-between gap-4 rounded-[12px] border border-neutral-200 px-2 py-1 dark:border-neutral-800 ${selectedTheme === "light" ? "bg-neutral-200 dark:bg-neutral-800" : ""}`}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-2xl border border-neutral-200 p-2 dark:border-neutral-800">
              {!isDarkMode ? (
                <img src="/svgs/sun.svg" alt="Light Mode" />
              ) : (
                <img src="/svgs/sun-dark.svg" alt="Light Mode" />
              )}
            </div>
            <div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-medium dark:text-white">Light Mode</h3>
                <p className="font-normal text-neutral-700 dark:text-neutral-300">
                  Pick a clean and classic light theme
                </p>
              </div>
            </div>
          </div>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={selectedTheme === "light"}
            onChange={(e) => setSelectedTheme(e.target.value)}
            className="dark:accent-blue-500"
          />
        </label>

        <label
          className={`flex cursor-pointer items-center justify-between gap-4 rounded-[12px] border border-neutral-200 px-2 py-1 dark:border-neutral-800 ${selectedTheme === "dark" ? "bg-neutral-200 dark:bg-neutral-800" : ""}`}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-2xl border border-neutral-200 p-2 dark:border-neutral-800">
              {!isDarkMode ? (
                <img src="/svgs/dark-mode.svg" alt="Dark Mode" />
              ) : (
                <img src="/svgs/dark-mode-dark.svg" alt="Dark Mode" />
              )}
            </div>
            <div className="flex flex-col gap-[6px]">
              <h3 className="font-medium dark:text-white">Dark Mode</h3>
              <p className="font-normal text-neutral-700 dark:text-neutral-300">
                Select a sleek modern dark theme
              </p>
            </div>
          </div>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={selectedTheme === "dark"}
            onChange={(e) => setSelectedTheme(e.target.value)}
            className="dark:accent-blue-500"
          />
        </label>

        <label
          className={`flex cursor-pointer items-center justify-between gap-4 rounded-[12px] border border-neutral-200 px-2 py-1 dark:border-neutral-800 ${selectedTheme === "system" ? "bg-neutral-200 dark:bg-neutral-800" : ""}`}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-2xl border border-neutral-200 p-2 dark:border-neutral-800">
              {!isDarkMode ? (
                <img src="/svgs/light-mode.svg" alt="System" />
              ) : (
                <img src="/svgs/light-mode-dark.svg" alt="System" />
              )}
            </div>

            <div className="flex flex-col gap-[6px]">
              <h3 className="font-medium dark:text-white">System</h3>
              <p className="font-normal text-neutral-700 dark:text-neutral-300">
                Adapts to your device's theme
              </p>
            </div>
          </div>
          <input
            type="radio"
            name="theme"
            value="system"
            checked={selectedTheme === "system"}
            onChange={(e) => setSelectedTheme(e.target.value)}
            className="dark:accent-blue-500"
          />
        </label>

        <div className="mt-4 flex justify-end">
          <Button onClick={handleApply}>Apply Changes</Button>
        </div>
      </div>
    </div>
  );
}

export default ColorTheme;
