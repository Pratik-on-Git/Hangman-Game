import { Link } from "react-router-dom";

const PlayGame = () => {
  return (
    <>
      <h1>Play Game</h1>
      <Link to="/start" className="text-blue-600">Back to Start</Link>
    </>
  );
};

export default PlayGame;