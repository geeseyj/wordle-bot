import getCorrectLettersRegex from "./getCorrectLettersRegex";
import getSortedWords from "./getSortedWords";
import Wordle from "./wordle";
import words from "./words";

export default function getGuess(wordle: Wordle): string {
	const guesses = wordle.getGuesses();
	const letterEvaluations = wordle.getLetterEvaluations();

	if (guesses.length === 0) {
		return `later`;
	}

	const notAlreadyGuessed = (word: string) => !guesses.includes(word);
	const excludedLetters = Object.keys(letterEvaluations).filter(key => letterEvaluations[key] === `absent`);
	const doesntContainExcludedLetters = (word: string) => !word.split(``).some((letter: string) => excludedLetters.includes(letter));
	const correctLettersRegex = getCorrectLettersRegex(wordle);
	const correctLettersRegexFilter = (word: string): boolean => correctLettersRegex.test(word);

	const presentLetterData = wordle.getGuessEvaluations().reduce((data, guessEval, guessIndex) => {
		guessEval.forEach((letterEvaluation, letterIndex) => {
			if (letterEvaluation !== `present`) {
				return;
			}

			const letter = guesses[guessIndex][letterIndex] as string;

			if (!data[letter]) {
				data[letter] = new Set();
			}

			data[letter].add(letterIndex);
		});

		return data;
	}, {} as Record<string, Set<number>>) as Record<string, Set<number>>;

	const presentLetters = Object.keys(presentLetterData);

	const presentLetterFilter = (word: string) => {
		if (!presentLetters.every((letter) => word.includes(letter))) {
			return false;
		}

		if (presentLetters.some(letter => Array.from(presentLetterData[letter]).some((wrongIndex: number) => word[wrongIndex] === letter))) {
			return false;
		}

		return true;
	};

	const availableWords = getSortedWords()
		.filter(notAlreadyGuessed)
		.filter(doesntContainExcludedLetters)
		.filter(correctLettersRegexFilter)
		.filter(presentLetterFilter);

	const guess = availableWords[0];

	return guess;
}