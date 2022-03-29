import getCorrectLettersRegex from './getCorrectLettersRegex';
import getExcludedLetters from './getExcludedLetters';
import words from './words';

export default function getGuess(game: any): string {
	const boardState = game.boardState as Array<string>;

	if (boardState.filter(Boolean).length === 0) {
		console.log(`guessing: arose`);
		return `arose`;
	}

	const excludedLetters = getExcludedLetters(game);
	const doesntContainExcludedLetters = (word: string) => !word.split(``).some((letter: string) => excludedLetters.includes(letter));
	const correctLettersRegex = getCorrectLettersRegex(game);
	const availableWords = words.filter(doesntContainExcludedLetters).filter();
	const guess = availableWords[0];

	console.log(`guessing: ${guess}`);

	return availableWords[0];
}