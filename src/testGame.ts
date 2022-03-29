import gameInterface from "./gameInterface";

export default class testGame implements gameInterface {
	public gameStatus = `IN_PROGRESS`;
	public boardState: Array<string> = [];
	public evaluations: Array<Array<string>|null> = [null, null, null, null, null, null];
	public $keyboard = { _letterEvaluations: {} };

	constructor(protected solution: string) {}

	guess(word: string) {
		if (word === this.solution) {
			this.gameStatus = `WIN`;
			return;
		}

		
	}


}