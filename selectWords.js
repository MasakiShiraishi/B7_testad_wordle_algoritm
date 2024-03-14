// function hasUniqueCharacters(word) {
//   const characterSet = new Set(word);
//   return characterSet.size === word.length;
// }

// function selectWord(wordList, desiredLength, uniqueCharacters) {
//   // Filter words based on desired length and whether letters must be unique
//   const filteredWords = wordList.filter(
//     (word) =>
//       word.length === desiredLength &&
//       (!uniqueCharacters || hasUniqueCharacters(word))
//   );

//   if (filteredWords.length === 0) {
//     return 'No suitable word found.';
//   }

//   // Select a random word from the filtered list
//   const chosenWord =
//     filteredWords[Math.floor(Math.random() * filteredWords.length)];
//   return chosenWord;
// }

// // Example usage:
// const wordList = ['test', 'words', 'programming', 'json','css','html','java', 'javascript', 'python'];
// const desiredLength = 4;
// const uniqueCharacters = true;

// const chosenWord = selectWord(wordList, desiredLength, uniqueCharacters);
// console.log(`Chosen word: ${chosenWord}`);

function hasUniqueCharacters(word) {
  const characterSet = new Set(word);
  return characterSet.size === word.length;
}

function selectWords(wordList, desiredLength, uniqueCharacters) {
  // Filter words based on desired length and whether letters must be unique
  const filteredWords = wordList.filter(
    (word) =>
      word.length === desiredLength &&
      (!uniqueCharacters || hasUniqueCharacters(word))
  );

  if (filteredWords.length === 0) {
    return ['No suitable words found.'];
  }

  // Return the list of filtered words
  return filteredWords;
}

// Example usage:
const wordList = [
  'test',
  'words',
  'programming',
  'json',
  'css',
  'html',
  'java',
  'javascript',
  'python',
];
const desiredLength = 4;
const uniqueCharacters = true;

const chosenWords = selectWords(wordList, desiredLength, uniqueCharacters);
console.log(`Chosen words: ${chosenWords.join(', ')}`);

module.exports = { selectWords, hasUniqueCharacters };
