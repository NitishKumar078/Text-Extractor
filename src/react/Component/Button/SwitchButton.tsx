import { useState } from "react";
import "./Button.css";
import { setIteam } from "../utils/localstorage";

interface ExtractButtonProps {
  settext: React.Dispatch<React.SetStateAction<string>>; // Type the settext function
}
const SwitchButton: React.FC<ExtractButtonProps> = ({ settext }) => {
  const [SelectedButton, setSelectedButton] = useState(true);

  const SelectionHandler = async () => {
    setSelectedButton(!SelectedButton);

    if (SelectedButton) {
      // send message to content script for selection of element and extract the text
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0]; // Get the first (active) tab
        if (activeTab.id) {
          // Send message only if the tab exists
          chrome.tabs.sendMessage(
            activeTab.id,
            { action: "selection" },
            (response) => {
              setIteam("selctedtext", response.text);
              settext(response.text);
            }
          );
        } else {
          console.error("No active tab found");
        }
      });
    } else {
      // again send the message to stop the content script
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0]; // Get the first (active) tab
        if (activeTab.id) {
          chrome.tabs.sendMessage(
            activeTab.id,
            { action: "stop" },
            function (response) {
              console.log(response);
            }
          );
        }
      });
    }
  };

  return (
    <>
      <input
        type="checkbox"
        onClick={SelectionHandler}
        title="Click and Select the Element"
      />
    </>
  );
};

export default SwitchButton;
