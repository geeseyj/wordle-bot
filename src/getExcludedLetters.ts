import getLetterEvaluations from "./getLetterEvaluations";

export default function getExcludedLetters(game: Record<string, unknown>) {
	const letterEvaluations = getLetterEvaluations(game);
    
	return Object.keys(letterEvaluations).filter(key => letterEvaluations[key] === `absent`);
}