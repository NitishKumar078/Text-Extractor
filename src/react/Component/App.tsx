import "./App.css";
import ExtractButton from "./Button/ExtractButton";
import SwitchButton from "./Button/SwitchButton";
import { fetchtext } from "./Hooks/Activate";
import Copy from "./ui/Copy";

const App = () => {
  const [gettext, setGettext] = fetchtext("selectedtext", "");

  return (
    <div className="App">
      <h1 className="title">Text Extractor</h1>
      <div className="button_container">
        <SwitchButton settext={setGettext} />
        <ExtractButton settext={setGettext} />
      </div>

      <textarea className="text_area" value={gettext}></textarea>

      <div className="note_container">
        <span className="note" style={{ display: "none" }}>
          Note: Feel free to select the element to extract the text
        </span>
      </div>
      <Copy />
    </div>
  );
};

export default App;
