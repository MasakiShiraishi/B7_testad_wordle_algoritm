function wordleFeedback(guess, correctWord) {
  let result = [];
  let correctWordCount = {};

  // Create a counter for each letter in the correct word
  for (let letter of correctWord) {
    correctWordCount[letter] = (correctWordCount[letter] || 0) + 1;
  }

  for (let i = 0; i < guess.length; i++) {
    let letter = guess[i];

    if (letter === correctWord[i]) {
      result.push({ letter: letter, result: 'correct' });
      correctWordCount[letter] -= 1;
    } else if (correctWord.includes(letter)) {
      if (correctWordCount[letter] > 0) {
        result.push({ letter: letter, result: 'misplaced' });
        correctWordCount[letter] -= 1;
      } else {
        result.push({ letter: letter, result: 'incorrect' });
      }
    } else {
      result.push({ letter: letter, result: 'incorrect' });
    }
  }
  return result;
}
let testLeter = wordleFeedback('tester','teslar')
console.log(testLeter);

module.exports = wordleFeedback;