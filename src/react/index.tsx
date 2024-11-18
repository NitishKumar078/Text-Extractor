import { createRoot } from "react-dom/client";
import App from "./Component/App";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Failed to find element with ID 'root'");
}
