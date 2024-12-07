function GameOver(props) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {props.winner && <p>{props.winner} won!</p>}
            {!props.winner && <p>It&apos;s a draw!</p>}
            <p>
                <button onClick={props.onRestart}>Rematch!</button>
            </p>
        </div>
    );
}


export default GameOver;