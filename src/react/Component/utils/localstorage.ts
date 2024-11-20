export function getIteam(key: string) {
  try {
    const iteam = localStorage.getItem(key);
    return iteam ? JSON.parse(iteam) : false;
  } catch (error) {
    console.log("unable to get the data", error);
  }
}

export function setIteam(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}
