import "./App.css";
import ExtractButton from "./Button/ExtractButton";
import SwitchButton from "./Button/SwitchButton";
import { fetchtext } from "./Hooks/Activate";
import Copy from "./ui/Copy";

const App = () => {
  const [gettext, setGettext] = fetchtext("selectedtext", "");
  const [trimSpace, setTrimSpace] = fetchtext("trimSpace", false);

  return (
    <div className="App">
      <h1 className="title">Text Extractor</h1>
      <div className="button_container">
        <SwitchButton settext={setGettext} />
        <ExtractButton settext={setGettext} />
      </div>

      <textarea
        className="text_area"
        value={trimSpace ? gettext.trim() : gettext}
      ></textarea>

      <div className="note_container">
        <span className="note" style={{ display: "none" }}>
          Note: Feel free to select the element to extract the text
        </span>
      </div>
      <div className="optionsContainer">
        <div className="options">
          <div className="trimSpace">
            <label className="checkBox">
              <input
                id="option1"
                type="checkbox"
                onClick={() => setTrimSpace(!trimSpace)}
                checked={trimSpace}
              />
              <div className="transition"></div>
            </label>
            <label className="label" htmlFor="option1">
              trim Extra Space's
            </label>
          </div>
        </div>
        <Copy />
      </div>
    </div>
  );
};

export default App;
