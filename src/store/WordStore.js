import { create } from "zustand";

// create function creates a store and returns a hook to use the store in components
const wordStore = create((set) => ({
  wordList: [],     // List of possible words for the game
  word: "",        // Current word to guess
  setWordList: (list) => set((state) => {
    console.log("State Printing", state);
    return { ...state, wordList: list };
  }),    // Action to set the word list
  setWord: (newWord) => set((state) => {
    return { ...state, word: newWord };
  }), // Action to set the current word to guess
}));

export default wordStore;