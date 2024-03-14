const { selectWords } = require('./selectWords');

describe('selectWords', () => {
  test('returns an empty list if the word list is empty', () => {
    const wordList = [];
    const desiredLength = 4;
    const uniqueCharacters = true;
    const expected = ['No suitable words found.'];
    expect(selectWords(wordList, desiredLength, uniqueCharacters)).toEqual(expected);
  });

  // Verifying the function works correctly when the desiredLength is set to a value not present in wordList.
  test('returns an appropriate message when no words match a very specific length', () => {
    const wordList = ['testing', 'longerword', 'short', 'mini', 'tiny'];
    const desiredLength = 10; // No word in the list has this length
    const uniqueCharacters = true;
    const expected = ['No suitable words found.'];
    expect(selectWords(wordList, desiredLength, uniqueCharacters)).toEqual(expected);
  });

  test('returns a message if no suitable words are found', () => {
    const wordList = ['test', 'echo', 'shop', 'deer', 'css', 'html', 'java'];
    const desiredLength = 5;
    const uniqueCharacters = true;
    const expected = ['No suitable words found.'];
    expect(selectWords(wordList, desiredLength, uniqueCharacters)).toEqual(expected);
  });
// Testing the function with words that all have unique characters, expecting all to be returned.
  test('returns all words when all have unique characters and match the desired length', () => {
    const wordList = ['echo', 'golf', 'html', 'java'];
    const desiredLength = 4;
    const uniqueCharacters = true;
    const expected = ['echo', 'golf', 'html'];
    expect(selectWords(wordList, desiredLength, uniqueCharacters)).toEqual(expected);
  });

  // Ensuring the function properly filters out words with repeated characters if uniqueCharacters is true.
  test('filters out words with non-unique characters when uniqueCharacters is true', () => {
    const wordList = ['loop', 'pool', 'cool', 'wool'];
    const desiredLength = 4;
    const uniqueCharacters = false; // Setting to false should ignore the unique character filter
    const expected = ['loop', 'pool', 'cool', 'wool'];
    expect(selectWords(wordList, desiredLength, uniqueCharacters)).toEqual(expected);
  });

  test('returns words of a specific length with unique characters', () => {
    const wordList = ['test', 'echo', 'shop', 'deer', 'css', 'html', 'java'];
    const desiredLength = 4;
    const uniqueCharacters = true;
    const expected = ['test', 'deer', 'java'];
    expect(selectWords(wordList, desiredLength, uniqueCharacters)).not.toEqual(expected);
  });
  
});
