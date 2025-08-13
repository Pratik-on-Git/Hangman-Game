
import { Link, useSearchParams } from "react-router-dom";

const PlayGame = () => {
  const [searchParams] = useSearchParams();
  console.log("Search params:", searchParams.get("text"));
  return (
    <>
      <h1>Play Game</h1>
      <Link to="/start" className="text-blue-600">Back to Start</Link>
    </>
  );
};

export default PlayGame;