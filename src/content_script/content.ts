/**
 * This is content script of the chrome extention
 *
 */
console.log("hello world... from the content script");
let Elementbgcolor: string = "";
function activate() {
  document.body.addEventListener("mouseover", tracker);
  document.body.addEventListener("mouseout", untracker);
}

function deactivate() {
  document.body.removeEventListener("mouseover", tracker);
  document.body.removeEventListener("mouseout", untracker);
}

function untracker(event: MouseEvent) {
  if (event.target instanceof HTMLElement) {
    event.target.style.backgroundColor = Elementbgcolor;
  }
}

function tracker(event: MouseEvent) {
  if (event.target instanceof HTMLElement) {
    Elementbgcolor = event.target.style.backgroundColor;
    event.target.style.backgroundColor = "#9ae7d9b3";
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let filters = ["/n", "/t"];
  if (request.action === "selection") {
    console.log("now its time for selection of the Element ");
    activate();

    document.body.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        console.log(e.target);
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

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "stop") {
    console.log("stop the content script");
    deactivate();
  }
  return true;
});
