import { useState } from "react";
import "./Button.css";
import { setIteam } from "../utils/localstorage";

interface ExtractButtonProps {
  settext: React.Dispatch<React.SetStateAction<string>>; // Type the settext function
}
/**
 * The SwitchButton component handles the extraction of text from the selected element and handles the visibility of the copy button.
 *
 * @param {React.Dispatch<React.SetStateAction<string>>} settext - A function to update the parent state with the extracted text.
 * @returns {React.ReactElement} The SwitchButton component which consists of a checkbox.
 */
const SwitchButton: React.FC<ExtractButtonProps> = ({ settext }) => {
  const [SelectedButton, setSelectedButton] = useState(true);
  const ignoreUrls = ["chrome://"]; // all new and extion pages will be ignored
  const SelectionHandler = async () => {
    setSelectedButton(!SelectedButton);

    if (SelectedButton) {
      // send message to content script for selection of element and extract the text
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0]; // Get the first (active) tab
        if (activeTab.id && activeTab.url) {
          // Send message only if the tab exists
          // Check if the active tab URL starts with any of the ignore URLs
          const shouldIgnore = ignoreUrls.some((ignoreUrl) =>
            activeTab.url?.startsWith(ignoreUrl)
          );

          if (shouldIgnore) {
            console.log("Ignoring this page due to its URL.");
            return; // Exit the function if the URL should be ignored
          }

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
