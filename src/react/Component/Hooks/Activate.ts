import { useState, useEffect } from "react";
import { getIteam, setIteam } from "../utils/localstorage";

/**
 * Returns a state variable and a function to update that state variable that
 * persists across page reloads using local storage.
 *
 * @param {string} key The key to use to store the value in local storage.
 * @param {T} intialstate The initial value of the state variable if there is
 * no value stored in local storage.
 *
 * @returns An array with two elements. The first element is the current value
 * of the state variable, and the second element is a function that can be
 * called to update the state variable. The function takes a single argument,
 * which is the new value for the state variable.
 *
 * @example
 * const [isActivated, setisActivated] = fetchtext(
 *   "isActivated",
 *   false
 * );
 */
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
