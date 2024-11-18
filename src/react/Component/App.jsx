import React, { useEffect } from "react";
import "./App.css";
import Button from "./Button/Button";
import activation from "./Hooks/activation";

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Text Extractor</h1>
      <Button />
    </div>
  );
};

export default App;
