import getButtonStyling from "./getButtonStyling";

const Button = ({ text, onClickHandler, styletype = "primary", type = "button" }) => {
  return (
    <button 
    onClick={onClickHandler}
    type={type}
    className={`${getButtonStyling(styletype)} text-white py-2 px-4 border-none rounded cursor-pointer`}
    >
      {text}
    </button>
  );
};




export default Button;