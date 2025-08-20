
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";

const PlayGame = () => {
  const {state} = useLocation();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);
  
  function handleLetterClick(letter) {
    if (state?.wordSelected?.toUpperCase().includes(letter)) {
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
      {state?.wordSelected && (
        <>
          <MaskedText text={state?.wordSelected} guessedLetters={guessedLetters} />
          <div>
      <LetterButtons
        text={state?.wordSelected}
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