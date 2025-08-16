import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    try {
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (err) {
      console.warn(
        `Error parsing localStorage key "${key}", resetting it.`,
        err,
      );
      localStorage.removeItem(key);
      return initialState;
    }
    // return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );
  return [value, setValue];
}
