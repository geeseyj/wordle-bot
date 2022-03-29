export default function correctLettersFilter(word: string): boolean {
	return word.match(correctLettersRegex);
}