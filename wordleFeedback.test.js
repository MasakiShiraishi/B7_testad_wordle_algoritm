const wordleFeedback = require('./wordleFeedback');

describe('wordleFeedback function', () => {
  test('Inga matchande bokstäver', () => {
    expect(wordleFeedback('CYKLA', 'BRUNS')).toEqual([
      { letter: 'C', result: 'incorrect' },
      { letter: 'Y', result: 'incorrect' },
      { letter: 'K', result: 'incorrect' },
      { letter: 'L', result: 'incorrect' },
      { letter: 'A', result: 'incorrect' },
    ]);
  });

  test('Alla bokstäver korrekt placerade', () => {
    expect(wordleFeedback('BRUNS', 'BRUNS')).toEqual([
      { letter: 'B', result: 'correct' },
      { letter: 'R', result: 'correct' },
      { letter: 'U', result: 'correct' },
      { letter: 'N', result: 'correct' },
      { letter: 'S', result: 'correct' },
    ]);
  });

  test('Blandning av korrekt, felplacerade och inkorrekta bokstäver', () => {
    expect(wordleFeedback('BANAN', 'BRUNS')).toEqual([
      { letter: 'B', result: 'correct' },
      { letter: 'A', result: 'incorrect' },
      { letter: 'N', result: 'misplaced' },
      { letter: 'A', result: 'incorrect' },
      { letter: 'N', result: 'incorrect' },
    ]);
  });

  test('Samma bokstav flera gånger i gissningen men bara en gång i det korrekta ordet', () => {
    expect(wordleFeedback('BBBBB', 'BRUNS')).toEqual([
      { letter: 'B', result: 'correct' },
      { letter: 'B', result: 'incorrect' },
      { letter: 'B', result: 'incorrect' },
      { letter: 'B', result: 'incorrect' },
      { letter: 'B', result: 'incorrect' },
    ]);
  });
});
