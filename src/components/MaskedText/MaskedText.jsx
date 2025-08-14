import { getMaskedString } from "./MaskingUtility";
const MaskedText = ({text, guessedLetters}) => {

  const maskedString = getMaskedString(text, guessedLetters);
  return (
    <>
      {maskedString.map((letter, index) => (
        <span key={index} className="mx-1">
          {letter}
        </span>
      ))}
    </>
  );
};

export default MaskedText;
