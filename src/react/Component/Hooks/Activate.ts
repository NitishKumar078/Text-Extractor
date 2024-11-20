import { useState, useEffect } from "react";
import { getIteam, setIteam } from "../utils/localstorage";

export function fetchtext<T>(key: string, intialstate: T) {
  const [gettext, setgettext] = useState(() => {
    const iteam = getIteam(key);
    return (iteam as T) || intialstate;
  });
  // Load the activate state from local storage on mount
  useEffect(() => {
    setIteam(key, gettext);
  }, [gettext]);

  // Function to toggle activation and update local storage
  return [gettext, setgettext] as const;
}
