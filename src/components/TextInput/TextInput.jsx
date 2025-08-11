const TextInput = ({ type ="text", label, onChangeHandler, placeholder = "Enter Your Input Here" }) => {
  return (
    <label>
      <h1 className="text-gray-700">{label}</h1>
      <input
        type={type}
        className="border border-gray-500 px-4 py-2 rounded-md w-full"
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </label>
  );
};

export default TextInput;

