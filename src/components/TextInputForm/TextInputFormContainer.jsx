import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
const TextInputFormContainer = () => {

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", value);
    if (value) {
      // Navigate to the play page if the value is valid
        setTimeout(() => {
            navigate(`/play?text=${value}`);
        }, 3000);
    }
  };

  const handleTextInputChange = (e) => {
    setValue(e.target.value);
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
