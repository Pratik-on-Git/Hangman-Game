import { create } from "zustand";

// create function creates a store and returns a hook to use the store in components
const wordStore = create((set) => ({
  wordList: [],
  word: "",
  setWordList: (list) => set((state) => ({ ...state, wordList: list })),
}));

export default wordStore;