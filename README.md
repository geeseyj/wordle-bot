# wordle-bot

## Welcome!

I've created a class called Wordle that behaves exactly like the Wordle game.

Think you have what it takes to beat my solving algorithm's score? (wins 98.8739714% of the time)

There are only a few simple rules:
1. Don't just guess the solution. Where's the fun in that?
2. Your solving algorithm can only remember the last 4 wordle solutions. (This mimics reality since a person wouldn't think the solution for today's puzzle was the same as yesterday's puzzle.)
3. Your solving algorithm can "know" all the possible solution words.
4. Only guess real 5 letter words. (This isn't programmatically enforced... yet!);

If you find any bugs please feel free to submit a pull request!

Have fun!

## Installation
- Clone and `cd` into the repo.
- Run `npm install`
- Remember it's Typescript and you have to compile any changes you try to make.

## Running the Games
- Run `npm start`


## Credit Where It's Due
- Idea for weighting letters came from David Sidhu's article here: https://thenextweb.com/news/wordle-the-best-word-to-start-wordle-research