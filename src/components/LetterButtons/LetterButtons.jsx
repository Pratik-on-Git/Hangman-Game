const alphabets = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
const LetterButtons = ({ text, guessedLetters, onLetterClick }) => {

  // Create a set of original letters from the text
  const originalLetters = new Set(text.toUpperCase().split(""));
  // Create a set of guessed letters for quick lookup
  const guessedLettersSet = new Set(guessedLetters);

  const buttonsStyle = function (letter) {
    if (guessedLettersSet.has(letter)) {
      return `${originalLetters.has(letter) ? "bg-green-500" : "bg-red-500"}`;
    }
    return "bg-blue-500 hover:bg-blue-600";
  };

  function handleLetterClick(event) {
    const characterOfTheLetter = event.target.value;
    onLetterClick?.(characterOfTheLetter);
  }

  const buttons = alphabets.map((letter) => {
    return (
      <button
        key={`button - ${letter}`}
        value={letter}
        onClick={handleLetterClick}
        disabled={guessedLettersSet.has(letter)}
        className={`h-12 w-12 m-1 rounded-md text-white font-bold ${buttonsStyle(letter)}`}
      >
        {letter}
      </button>
    );
  });

  return <>{buttons}</>;
};

export default LetterButtons;
