import { useState } from "react";
import "./Button.css";

const SwitchButton = () => {
  const [SelectedButton, setSelectedButton] = useState(false);
  const SelectionHandler = async () => {
    setSelectedButton(!SelectedButton);
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
    const noteEle = document.getElementsByClassName("note");
    if (element && noteEle) {
      (noteEle[0] as HTMLTextAreaElement).style.display = "block";
      (element[0] as HTMLTextAreaElement).value = selectedText || "";
    }
  };

  return (
    <>
      <input type="checkbox" onClick={SelectionHandler} />
    </>
  );
};

export default SwitchButton;
