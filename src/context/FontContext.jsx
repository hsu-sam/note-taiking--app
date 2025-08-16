/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const FontContext = createContext();

function FontProvider({ children }) {
  const [appliedFont, setAppliedFont] = useLocalStorageState(
    "sans-serif",
    "font",
  );
  const [selectedFont, setSelectedFont] = useState(appliedFont);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("font-sans-serif", "font-serif", "font-monospace");

    switch (appliedFont) {
      case "sans-serif":
        root.classList.add("font-sans-serif");
        document.body.style.fontFamily =
          '"Inter", -apple-system, BlinkMacSystemFont, sans-serif';
        break;
      case "serif":
        root.classList.add("font-serif");
        document.body.style.fontFamily = '"Noto Serif", Georgia, serif';
        break;
      case "monospace":
        root.classList.add("font-monospace");
        document.body.style.fontFamily =
          '"Source Code Pro", Consolas, Monaco, monospace';
        break;
      default:
        root.classList.add("font-sans-serif");
        document.body.style.fontFamily =
          '"Inter", -apple-system, BlinkMacSystemFont, sans-serif';
    }
  }, [appliedFont]);

  const applySelectedFont = () => {
    setAppliedFont(selectedFont);
  };

  // Sync selectedFont when appliedFont changes
  useEffect(() => {
    setSelectedFont(appliedFont);
  }, [appliedFont]);

  return (
    <FontContext.Provider
      value={{
        appliedFont,
        selectedFont,
        setSelectedFont,
        applySelectedFont,
      }}
    >
      {children}
    </FontContext.Provider>
  );
}

function useFont() {
  const context = useContext(FontContext);
  if (context === undefined)
    throw new Error("Font context was used outside of FontProvider");
  return context;
}

export { FontProvider, useFont };
