
import { Link, useLocation } from "react-router-dom";

const PlayGame = () => {
  const {state} = useLocation();
  // const { text } = useParams();
  // const [searchParams] = useSearchParams();
  // console.log("Search params:", searchParams.get("text"));
  return (
    <>
      <h1>Play Game {state.wordSelected}</h1>
      <Link to="/start" className="text-blue-600">Back to Start</Link>
    </>
  );
};

export default PlayGame;