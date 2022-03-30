import Wordle from "./wordle";

export default function getCorrectLettersRegex(wordle: Wordle): RegExp {
	const guesses = wordle.getGuesses();

	if (guesses.length === 0) {
		return /[a-z]{5}/;
	}	

	const correctSoFar = Array(5).fill(`[a-z]`);
	const evaluations = wordle.getGuessEvaluations();

	evaluations.forEach((evaluation, evaluationIndex) => {
		if (!evaluation.includes(`correct`)) {
			return;
		}

		evaluation.forEach((result: string, letterIndex: number) => {
			if (result !== `correct`) {
				return;
			}

			correctSoFar[letterIndex] = guesses[evaluationIndex][letterIndex];
		});
	});

	return RegExp(correctSoFar.join(``));
}