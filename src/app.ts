
import getGuess from "./getGuess";
import getSortedWords from "./getSortedWords";
import Wordle from "./wordle";
import words from "./words";

// const sortedWords = getSortedWords();
// console.log(sortedWords.filter((word: string) => `later`.split(``).every(letter => !word.includes(letter))));

let won = 0;
const sample = words.slice();


const fails = [] as Array<string>;

sample.forEach((word: string) => {

	const wordle = new Wordle(word);

	while (wordle.getStatus() === `IN_PROGRESS`) {
		wordle.guess(getGuess(wordle));
	}

	if (wordle.getStatus() === `WIN`) {
		won++;
	} else {
		fails.push(word);
	}
});

console.log(fails);

console.log(`win: ${Math.round(1000000000 * won / sample.length)/10000000}%`);
