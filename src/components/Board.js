import React, { useState } from "react";
import { Game } from "./";

function Board(props) {
  const [isXNext, setNext] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));

  const setNextValue = () => {
    setNext(!isXNext);
  };

  const calcWinner = () => {
    const squares = board;
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const isTie = () => {
    const squares = board;
    for (let el of squares) {
      if (el == null) return false;
    }

    return true;
  };

  const calcNext = () => {
    if (calcWinner()) {
      return <h3>Winner is {isXNext ? "O" : "X"} </h3>;
    } else if (isTie()) {
      return <h3>Its a tie between two players!! </h3>;
    } else {
      return <h3> Next turn: {isXNext ? "X" : "O"}</h3>;
    }
  };

  return (
    <div>
      <Game
        isXNext={isXNext}
        setNextValue={setNextValue}
        calcWinner={calcWinner}
        board={board}
        setBoard={setBoard}
      />
      {calcNext()}
    </div>
  );
}

export default Board;
