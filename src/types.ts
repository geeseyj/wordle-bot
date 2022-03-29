type Spot = {
    value: string;
    state: 'notUsed' | 'correct' | 'notHere';
}

type Attempt = Array<Spot>;

type Game = {
    result: boolean|null;
    guessWord: ( word: string ) => Promise<Game>;
    attempts: Array<Attempt>;
};
