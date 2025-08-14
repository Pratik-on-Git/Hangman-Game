
import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

const PlayGame = () => {
  const {state} = useLocation();
  // const { text } = useParams();
  // const [searchParams] = useSearchParams();
  // console.log("Search params:", searchParams.get("text"));
  return (
    <>
      <h1>Play Game {state.wordSelected}</h1>
      <MaskedText text={state.wordSelected} guessedLetters={[]} />
      <Link to="/start" className="text-blue-600">Back to Start</Link>
    </>
  );
};

export default PlayGame;