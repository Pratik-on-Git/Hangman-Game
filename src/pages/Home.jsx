import { Link } from "react-router-dom"
import Button from "../components/Button/Button";
import { useEffect } from "react";
import { useContext } from "react";
import WordContext from "../context/WordContext.js";


const Home = () => {

    const { setWordList, setWord } = useContext(WordContext);

    async function fetchWords() {
        // Fetch words from the API
        const response = await fetch("https://random-word-api.vercel.app/api?words=100");
        // Convert the fetched data to JSON
        const data = await response.json();
        // Assuming the API returns an array of words, pick one at random

        setWordList([...data]); // Store the fetched words in context


        const randomIndex = Math.floor(Math.random() * data.length);
        setWord(data[randomIndex]);
        console.log("Fetched word:", data[randomIndex]);
    }
    
    useEffect(() => {
        fetchWords()
    }, []);

  return (
    <>
      <Link to="/play">
        <Button text="Single Player Game" styletype="error" />
      </Link>
      <br />
      <Link to="/start">
        <div className="mt-4" >
          <Button text="Multiplayer Game" styletype="success" />
        </div>
      </Link>
    </>
  );
};

export default Home;
