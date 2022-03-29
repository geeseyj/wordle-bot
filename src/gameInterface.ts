interface gameInterface {
    boardState: any,
    evaluations: Array<Array<string>|null>,
    $keyboard: { _letterEvaluations: any },
    gameStatus: string,
}

export default gameInterface;