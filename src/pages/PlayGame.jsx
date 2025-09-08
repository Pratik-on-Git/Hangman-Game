
import { Link } from "react-router-dom";
import React, { useState } from "react";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";
import wordStore from "../store/WordStore.js";

const PlayGame = () => {
  // const {state} = useLocation();

  // const { word } = useContext(WordContext);

  const { wordList, word } = wordStore();

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);
  
  function handleLetterClick(letter) {
    if (word?.toUpperCase().includes(letter)) {
      console.log("Correct guess:", letter);
    } else {
      setStep(step + 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
  }
  // const { text } = useParams();
  // const [searchParams] = useSearchParams();
  // console.log("Search params:", searchParams.get("text"));
  return (
    <>
      <h1>Play Game</h1>

      {wordList.map((word, index) => (
        <li key={index}>{word.toUpperCase()}</li>
      ))}


      {word && (
        <>
          <MaskedText text={word} guessedLetters={guessedLetters} />
          <div>
      <LetterButtons
        text={word}
        guessedLetters={guessedLetters}
        onLetterClick={handleLetterClick}
      />
    </div>
    <div>
      <HangMan step={step} />
    </div>
        </>
      )}
      <Link to="/" className="text-red-600">Back to Home</Link>
      <Link to="/start" className="text-blue-600">Back to Start</Link>
    </>
  );
};

export default PlayGame;