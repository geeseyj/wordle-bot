type gameStatus = `IN_PROGRESS` | `WIN` | `FAIL`;
type letterEvaluation = `correct` | `present` | `excluded`;

export default class Wordle {
	protected letterEvaluations: Record<string, letterEvaluation> = {};
	protected status: gameStatus = `IN_PROGRESS`;
	protected guesses: Array<string> = [];
	protected guessEvaluations: Array<Array<letterEvaluation>> = [];

	constructor(protected solution: string) {}

	getLetterEvaluations(): Record<string, letterEvaluation> {
		return this.letterEvaluations;
	}

	guess(word: string) {
		if (this.guesses.length > 5) {
			return;
		}

		const solutionArray = this.solution.split(``);
		const evaluation = [] as Array<letterEvaluation>;

		word.split(``).map((letter, index) => {
			if (solutionArray[index] === letter) {
				evaluation[index] = `correct`;
				solutionArray[index] = ``;
				return null;
			}

			return letter;
		}).map((letter, index) => {
			if (!letter) {
				return ``;
			}

			const solutionLetterIndex = solutionArray.indexOf(letter);

			if (solutionLetterIndex !== -1) {
				evaluation[index] = `present`;
				solutionArray[solutionLetterIndex] = ``;
				return ``;
			}

			evaluation[index] = `excluded`;
		});

		this.guesses.push(word);
		this.guessEvaluations.push(evaluation);

		word.split(``).forEach((letter, index) => {
			if (this.letterEvaluations[letter] === `correct`) {
				return;
			}

			this.letterEvaluations[letter] = evaluation[index];
		});

		if (word === this.solution) {
			this.status = `WIN`;
		} else if (this.guesses.length > 5) {
			this.status = `FAIL`;
		}
	}
    
}