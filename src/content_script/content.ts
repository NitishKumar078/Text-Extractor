/**
 * This is content script of the chrome extention
 *
 */
let Elementbgcolor: string = "";

/**
 * This function is called when the popup is opened.
 * It adds event listeners to the <body> element to track
 * mouse over and mouse out events.
 * When mouse is over an element, it highlights it by changing its background color.
 * When mouse is out of an element, it reverts the background color of the element.
 */
function activate() {
  document.body.addEventListener("mouseover", tracker);
  document.body.addEventListener("mouseout", untracker);
}

/**
 * Revert the event listener for mouse over and mouse out.
 * This method is called when the popup is closed.
 */
function deactivate() {
  document.body.removeEventListener("mouseover", tracker);
  document.body.removeEventListener("mouseout", untracker);
}

/**
 * Revert the background color of the element when the mouse is out of it.
 * @param {MouseEvent} event - Mouse event when mouse is out of the element.
 */
function untracker(event: MouseEvent) {
  if (event.target instanceof HTMLElement) {
    event.target.style.backgroundColor = Elementbgcolor;
  }
}

/**
 * Highlight the element when the mouse is over it.
 * @param {MouseEvent} event - Mouse event when mouse is over the element.
 */
function tracker(event: MouseEvent) {
  if (event.target instanceof HTMLElement) {
    Elementbgcolor = event.target.style.backgroundColor;
    event.target.style.backgroundColor = "#9ae7d9b3";
  }
}

/**
 * checking the type of the event when the option selected from the pop to the content script and to the action acrooding
 * where :
 *  selection - activated the hover effect where used can selcted the element and extract the text
 * @param {object} request - Mouse event when mouse is over the element.
 * @param {object} sender - not used. // tab info where the message is coming from
 * @param {function} sendResponse - way to send the data back to the request came from .
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let filters = ["/n", "/t"];
  if (request.action === "selection") {
    // console.log("Now its time for selection of the Element ");
    activate();

    document.body.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        // console.log(e.target);
        if (e.target instanceof HTMLElement) {
          let text: string = e.target.textContent || "";
          if (text != "") {
            filters.forEach((filter) => {
              text = text.replace(filter, "");
            });
            e.target.style.backgroundColor = Elementbgcolor;
            deactivate();
            sendResponse({ text });
          }
        }
      },
      false
    );
  }
  return true;
});

/**
 * msg request to stop the content script.
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "stop") {
    console.log("stop the content script");
    deactivate();
  }
  return true;
});
