import TextInputForm from "./TextInputForm";
import React, { useState } from "react";
const TextInputFormContainer = () => {

    const [inputType, setInputType] = useState("password");

    const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleTextInputChange = (e) => {
    console.log("Text input changed:", e.target.value);
  };

  const handleShowHideClick = () => {
    console.log("Show/Hide clicked");
    if (inputType === "password") {
        setInputType("text");
    } else {
        setInputType("password");
    }
  };

  return (
    <div>
      <TextInputForm 
        inputType={inputType}
        handleFormSubmit={handleFormSubmit} 
        handleTextInputChange={handleTextInputChange} 
        handleShowHideClick={handleShowHideClick} 
      />
    </div>
  );
};

export default TextInputFormContainer;
