function GameBoard(props) {
    return (
        <ol id="game-board">
            {props.board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => props.onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                                {playerSymbol}
                            </button>
                        </li>
                    ))}
                </ol>
            </li>)}
        </ol>
    );
}

export default GameBoard;