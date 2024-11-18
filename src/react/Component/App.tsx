import "./App.css";
import ExtractButton from "./Button/ExtractButton";
import SwitchButton from "./Button/SwitchButton";

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Text Extractor</h1>
      <div className="button_container">
        <SwitchButton />
        <ExtractButton />
      </div>

      <textarea className="text_area"></textarea>

      <div className="note_container">
        <span className="note" style={{ display: "none" }}>
          Note: Feel free to select the element to extract the text
        </span>
      </div>
    </div>
  );
};

export default App;
