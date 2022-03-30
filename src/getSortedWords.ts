import words from "./words";

let sortedWords = null as null|Array<string>;
const letterWeight = 1 / (words.length * 5);

export default function getSortedWords(): Array<string> {
	if (sortedWords) {
		return sortedWords;
	}

	const letterWeights = {} as Record<string, number>;

	words.forEach(word => {
		word.split(``).forEach(letter => {
			if (undefined === letterWeights[letter]) {
				letterWeights[letter] = 0;
			}

			letterWeights[letter] += letterWeight;
		});
	});

	const getWordWeight = (word: string) => {
		return Array.from(new Set(word)).map((letter: string) => letterWeights[letter]).reduce((acc, weight) => acc + weight);
	};

	sortedWords = [...words].sort((a, b) => getWordWeight(b) - getWordWeight(a));

	return sortedWords;
}