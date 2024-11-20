import { useState } from "react";
import "./Button.css";

// Correct prop definition
interface ExtractButtonProps {
  settext: React.Dispatch<React.SetStateAction<string>>; // Type the settext function
}

const ExtractButton: React.FC<ExtractButtonProps> = ({ settext }) => {
  const [activate, toggleActivate] = useState(false);

  const SelectionHandler = async () => {
    toggleActivate(!activate);

    // Query the active tab
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const [tab] = tabs;

    // Execute script to get the selected text from the page
    const selectedText = await chrome.scripting
      .executeScript({
        target: { tabId: tab?.id ?? 0 }, // Use optional chaining for safety
        func: () => {
          const selection = window.getSelection();
          return selection ? selection.toString() : "";
        },
      })
      .then((result) => result[0].result || ""); // Extract the result

    console.log("Selected text:", selectedText);
    settext(selectedText || ""); // Update parent state
  };

  return (
    <>
      <button className="Btn-Container" onClick={SelectionHandler}>
        <span className="text" title="select text before you extract it">
          Extract Text
        </span>
        <span className="icon-Container">
          <svg
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
            <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
            <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
            <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
            <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
            <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
            <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
            <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
            <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
            <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
          </svg>
        </span>
      </button>
    </>
  );
};

export default ExtractButton;
