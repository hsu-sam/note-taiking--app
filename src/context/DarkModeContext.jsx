/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [appliedTheme, setAppliedTheme] = useLocalStorageState(
    "system",
    "theme",
  );
  const [selectedTheme, setSelectedTheme] = useState(appliedTheme);

  // Apply theme to document (only when appliedTheme changes)
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = () => {
      // CRITICAL: Always set explicit data-theme, never leave undefined
      if (appliedTheme === "dark") {
        root.setAttribute("data-theme", "dark");
      } else if (appliedTheme === "light") {
        root.setAttribute("data-theme", "light"); // Explicit light theme
      } else if (appliedTheme === "system") {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        root.setAttribute("data-theme", prefersDark ? "dark" : "light");
      }
    };

    applyTheme();

    // Listen to system theme changes if appliedTheme is 'system'
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (appliedTheme === "system") {
      const handler = () => applyTheme();
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, [appliedTheme]);

  // Function to apply the selected theme
  const applySelectedTheme = () => {
    setAppliedTheme(selectedTheme);
  };

  // Sync selectedTheme when appliedTheme changes (e.g., on page load)
  useEffect(() => {
    setSelectedTheme(appliedTheme);
  }, [appliedTheme]);

  return (
    <DarkModeContext.Provider
      value={{
        appliedTheme,
        selectedTheme,
        setSelectedTheme,
        applySelectedTheme,
        // Keep backwards compatibility
        theme: selectedTheme,
        setTheme: setSelectedTheme,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("Dark mode context was used outside of DarkModeProvider");
  return context;
}

function useIsDarkMode() {
  const { appliedTheme } = useDarkMode();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setIsDark(currentTheme === "dark");
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, [appliedTheme]);

  return isDark;
}

export { DarkModeProvider, useDarkMode, useIsDarkMode };
