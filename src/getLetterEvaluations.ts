export default function getLetterEvaluations(game: Record<string, any>) {
	return game?.$keyboard?._letterEvaluations as Record<string, string>;
}