import words from "./words.json";

export const getRandomWord = () => {
  // Lowercase words for simplicity
  return words[Math.floor(Math.random() * words.length)].toLowerCase();
};

export const countNumOfUniqueLetters = (word) => {
  let setOfUniqueLetters = new Set(word);

  return setOfUniqueLetters.size;
};
