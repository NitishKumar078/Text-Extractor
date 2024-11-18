import React from "react";
import "./Button.css";
import activation from "../Hooks/activation";

const Button = () => {
  const { activate, toggleActivate } = activation();

  return (
    <div className="container">
      <button
        className="selector"
        id="selector"
        role="button"
        onClick={toggleActivate}
      >
        {activate ? "Select Text" : "Click Me"}
      </button>
      {/* <div className={activate ? "show" : "hide"}>
        <span className="note">
          Note: Feel free to select the element to extract the text
        </span>
      </div> */}
    </div>
  );
};

export default Button;
