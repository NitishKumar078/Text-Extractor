import { useState, useEffect } from "react";

const activation = () => {
  const [activate, setActivate] = useState(false);

  // Load the activate state from local storage on mount
  useEffect(() => {
    const storedState = localStorage.getItem("ActivateState");
    setActivate(storedState === "true");
  }, []);

  // Function to toggle activation and update local storage
  const toggleActivate = () => {
    const newState = !activate;
    setActivate(newState);
    localStorage.setItem("ActivateState", newState.toString());
  };

  return { activate, toggleActivate };
};

export default activation;
