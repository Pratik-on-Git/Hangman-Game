const Button = ({ text, onClickHandler, styletype = "primary" }) => {
  return (
    <button 
    onClick={onClickHandler}
    className={`${getButtonStyling(styletype)} text-white py-2 px-4 border-none rounded cursor-pointer`}
    >
      {text}
    </button>
  );
};

function getButtonStyling(styletype) {
  switch (styletype) {
    case "primary":
      return "bg-blue-500 text-white";
    case "secondary":
      return "bg-gray-500 text-white";
    case "error":
      return "bg-red-500 text-white";
    case "success":
      return "bg-green-500 text-white";
    case "warning":
      return "bg-yellow-500 text-white";
    default:
      return "bg-blue-500 text-white";
  }
}

export default Button;