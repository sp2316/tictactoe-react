import React, { useState } from "react";
import { calcWinner } from "../helpers";
import { Board } from ".";

const styles = {
  width: "200px",
  margin: "20px auto",
};

function Game(props) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setstepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calcWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setstepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const isTie = () => {
    const squares = [...history[stepNumber]];
    for (let el of squares) {
      if (el == null) return false;
    }

    return true;
  };

  const calcNext = () => {
    if (winner) {
      return <h3>Winner is {xIsNext ? "O" : "X"} </h3>;
    } else if (isTie()) {
      return <h3>Its a tie between two players!! </h3>;
    } else {
      return <h3> Next turn: {xIsNext ? "X" : "O"}</h3>;
    }
  };

  const showHistoryButtons = history.map((_step, move) => {
    const destination = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{destination}</button>
      </li>
    );
  });

  const jumpTo = (step) => {
    setstepNumber(step);
    setXisNext(step % 2 === 0);
  };

  console.log("history is ", history);
  return (
    <div>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        {calcNext()}
        {showHistoryButtons}
      </div>
    </div>
  );
}

export default Game;
