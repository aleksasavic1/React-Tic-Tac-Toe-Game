function Log(props) {


    return <ol id="log">
        <h3>GAME LOG</h3>
        {props.turns.map(turn => 
            <li key={`${turn.square.row}${turn.square.col}`}>
                {turn.player} selected {turn.square.row}, {turn.square.col}
            </li>
        )}
    </ol>
}

export default Log;