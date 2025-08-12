import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
import { Link } from "react-router-dom";

const StartGame = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to Hangman!</h1>
      <p className="text-lg">Get ready to guess the word!</p>
      <TextInputFormContainer />
      <Link to="/play" className="text-blue-600">Start Game</Link>
    </div>
  );
};

export default StartGame;