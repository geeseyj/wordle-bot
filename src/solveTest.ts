import gameInterface from "./gameInterface";
import getGuess from "./getGuess";

export default function solveTest(game: gameInterface) {
	if (game.gameStatus !== `IN_PROGRESS`) {
		return game;
	}

	game?.guess(getGuess(game));

	return solveTest(game);
}