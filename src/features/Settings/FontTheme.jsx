import Button from "../../ui/Button";
import { useIsDarkMode } from "../../context/DarkModeContext";
import { useFont } from "../../context/FontContext";

function FontTheme() {
  const { selectedFont, setSelectedFont, applySelectedFont } = useFont();
  const isDarkMode = useIsDarkMode();

  function handleApply() {
    console.log("Applying selected font:", selectedFont);
    applySelectedFont();
  }
  return (
    <div className="rounded-1 m-8 flex w-[528px] flex-col gap-[24px]">
      <div className="flex flex-col gap-[4px]">
        <h2 className="text-base font-semibold">Font Theme</h2>
        <p className="text-sm font-normal text-neutral-700 dark:text-neutral-300">
          Choose your font theme:
        </p>
      </div>

      <div className="flex flex-col gap-[16px]">
        <label
          className={`flex cursor-pointer items-center justify-between gap-4 rounded-[12px] border border-neutral-200 px-2 py-1 dark:border-neutral-800 ${selectedFont === "sans-serif" ? "bg-neutral-200 dark:bg-neutral-800" : ""}`}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-2xl border border-neutral-200 p-2 dark:border-neutral-800">
              {!isDarkMode ? (
                <img src="/svgs/sans-serif.svg" alt="Light Mode" />
              ) : (
                <img src="/svgs/sans-serif-dark.svg" alt="Light Mode" />
              )}
            </div>
            <div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-medium">Sans-serif</h3>
                <p className="font-normal text-neutral-700 dark:text-neutral-300">
                  Clean and modern, easy to read.
                </p>
              </div>
            </div>
          </div>
          <input
            type="radio"
            name="font"
            value="sans-serif"
            checked={selectedFont === "sans-serif"}
            onChange={(e) => setSelectedFont(e.target.value)}
          />
        </label>

        <label
          className={`flex cursor-pointer items-center justify-between gap-4 rounded-[12px] border border-neutral-200 px-2 py-1 dark:border-neutral-800 ${selectedFont === "serif" ? "bg-neutral-200 dark:bg-neutral-800" : ""}`}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-2xl border border-neutral-200 p-2 dark:border-neutral-800">
              {!isDarkMode ? (
                <img src="/svgs/serif.svg" alt="Dark Mode" />
              ) : (
                <img src="/svgs/serif-dark.svg" alt="Dark Mode" />
              )}
            </div>
            <div className="flex flex-col gap-[6px]">
              <h3 className="font-medium">Serif</h3>
              <p className="font-normal text-neutral-700 dark:text-neutral-300">
                Classic and elegant for a timeless feel.
              </p>
            </div>
          </div>
          <input
            type="radio"
            name="font"
            value="serif"
            checked={selectedFont === "serif"}
            onChange={(e) => setSelectedFont(e.target.value)}
          />
        </label>

        <label
          className={`flex cursor-pointer items-center justify-between gap-4 rounded-[12px] border border-neutral-200 px-2 py-1 dark:border-neutral-800 ${selectedFont === "monospace" ? "bg-neutral-200 dark:bg-neutral-800" : ""}`}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-2xl border border-neutral-200 p-2 dark:border-neutral-800">
              {!isDarkMode ? (
                <img src="/svgs/monospace.svg" alt="System" />
              ) : (
                <img src="/svgs/monospace-dark.svg" alt="Dark Mode" />
              )}
            </div>

            <div className="flex flex-col gap-[6px]">
              <h3 className="font-medium">Monospace</h3>
              <p className="font-normal text-neutral-700 dark:text-neutral-300">
                Code-like, great for a technical vibe.
              </p>
            </div>
          </div>
          <input
            type="radio"
            name="font"
            value="monospace"
            checked={selectedFont === "monospace"}
            onChange={(e) => setSelectedFont(e.target.value)}
          />
        </label>

        <div className="mt-4 flex justify-end">
          <Button onClick={handleApply}>Apply Changes</Button>
        </div>
      </div>
    </div>
  );
}

export default FontTheme;
