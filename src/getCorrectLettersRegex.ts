export default function getCorrectLettersRegex(game: Record<string, unknown>): RegExp {
	const board = game?.boardState as Array<string>;
	const guesses = board.filter(Boolean);


	if (guesses.length === 0) {
		return /[a-z]{5}/;
	}	

	const correctSoFar = Array(5).fill(`[a-z]`);
	const evaluations = game?.evaluations as Array<Array<string>>;

	evaluations.forEach((evaluation: Array<string>|null, evaluationIndex: number) => {
		if (evaluation === null || !evaluation.includes(`correct`)) {
			return;
		}

		evaluation.forEach((result: string, letterIndex: number) => {
			if (result !== `correct`) {
				return;
			}

			correctSoFar[letterIndex] = board[evaluationIndex][letterIndex];
		});
	});

	return RegExp(correctSoFar.join(``));
}