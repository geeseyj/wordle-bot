type gameStatus = `IN_PROGRESS` | `WIN` | `FAIL`;
type letterEvaluation = `correct` | `present` | `absent`;

export default class Wordle {
	protected letterEvaluations: Record<string, letterEvaluation> = {};
	protected status: gameStatus = `IN_PROGRESS`;
	protected guesses: Array<string> = [];
	protected guessEvaluations: Array<Array<letterEvaluation>> = [];

	constructor(protected solution: string) {}

	getLetterEvaluations(): Record<string, letterEvaluation> {
		return this.letterEvaluations;
	}

	getStatus() {
		return this.status;
	}

	guess(word: string) {
		if (this.guesses.length > 5) {
			return;
		}

		const solutionArray = this.solution.split(``);
		const evaluation = [] as Array<letterEvaluation>;

		word?.split(``).forEach((letter, index) => {
			if (solutionArray[index] === letter) {
				evaluation[index] = `correct`;
				this.letterEvaluations[letter] = `correct`;
				solutionArray[index] = ``;
				return;
			}

			const indexOfLetterInSolution = solutionArray.indexOf(letter);

			if (-1 !== indexOfLetterInSolution) {
				evaluation[index] = `present`;
				this.letterEvaluations[letter] = this.letterEvaluations[letter] || `present`;
				return;
			}

			evaluation[index] = `absent`;
			this.letterEvaluations[letter] = this.letterEvaluations[letter] || `absent`;
		});

		this.guesses.push(word);
		this.guessEvaluations.push(evaluation);

		if (word === this.solution) {
			this.status = `WIN`;
		} else if (this.guesses.length > 5) {
			this.status = `FAIL`;
		}
	}

	getGuesses() {
		return this.guesses;
	}

	getGuessEvaluations() {
		return this.guessEvaluations;
	}
    
}