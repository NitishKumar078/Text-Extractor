import { useState } from "react";
import "./Button.css";

const ExtractButton = () => {
  const [activate, toggleActivate] = useState(false);
  const SelectionHandler = async () => {
    toggleActivate(!activate);
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const [tab] = tabs;

    const selectedText = await chrome.scripting
      .executeScript({
        target: { tabId: tab.id ? tab.id : 0 },
        func: () => {
          const selection = window.getSelection();
          const selectedText = selection ? selection.toString() : "";
          console.log(selectedText);
          return selectedText;
        },
      })
      .then((result) => result[0].result || "");
    debugger;
    console.log("Selected text:", selectedText);
    const element = document.getElementsByClassName("text_area");
    if (element) {
      (element[0] as HTMLTextAreaElement).value = selectedText || "";
    }
  };

  return (
    <>
      <button className="Btn-Container" onClick={SelectionHandler}>
        <span className="text">let's go!</span>
        <span className="icon-Container">
          <svg
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="nones"
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
