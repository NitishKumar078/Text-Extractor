/**
 * Retrieves an item from local storage by its key.
 *
 * @param {string} key - The key of the item to retrieve from local storage.
 * @returns {any | false} - The parsed item from local storage if found,
 * otherwise returns false. If parsing fails, logs an error to the console.
 */
export function getIteam(key: string) {
  try {
    const iteam = localStorage.getItem(key);
    return iteam ? JSON.parse(iteam) : false;
  } catch (error) {
    console.log("unable to get the data", error);
  }
}

/**
 * Sets an item in local storage.
 *
 * @param {string} key - The key to store the item under in local storage.
 * @param {unknown} value - The value to store under the given key in local
 * storage.
 */
export function setIteam(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}
