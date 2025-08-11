import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const TextInputForm = ({inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick }) => {
  return (
    <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <TextInput 
          type={inputType}
          label="Enter Your Word/Phrase Here"
          placeholder="Your Word/Phrase"
          onChangeHandler={handleTextInputChange} />
        </div>

        <div>
            <Button 
            styletype="warning"
            text={inputType === "password" ? "Show" : "Hide"} 
            onClickHandler={handleShowHideClick} />
        </div>

        <div>
            <Button 
            type="submit" 
            styletype="primary" 
            text="Submit" 
            onClickHandler={() => console.log("Form submitted")} />
        </div>
    </form>
  );
};

export default TextInputForm;
