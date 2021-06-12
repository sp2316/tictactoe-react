import React from "react";
import { Square } from "./";
import "../css/Game.css";

function Game(props) {
  const { isXNext, setNextValue, calcWinner } = props;
  const { board, setBoard } = props;
  //   const [board, setBoard] = useState(Array(9).fill(null));
  const row1 = [0, 1, 2];
  const row2 = [3, 4, 5];
  const row3 = [6, 7, 8];

  const onSquareClick = (i) => {
    const newBoard = [...board];

    if (calcWinner(newBoard) || newBoard[i] !== null) {
      return;
    }
    newBoard[i] = isXNext ? "X" : "O";
    setNextValue();
    setBoard(newBoard);
  };

  return (
    <div>
      <div className="row">
        {row1.map((value) => {
          return (
            <Square
              key={value}
              i={value}
              onSquareClick={onSquareClick}
              board={board}
            />
          );
        })}
      </div>
      <div className="row">
        {row2.map((value) => {
          return (
            <Square
              key={value}
              i={value}
              onSquareClick={onSquareClick}
              board={board}
            />
          );
        })}
      </div>
      <div className="row">
        {row3.map((value) => {
          return (
            <Square
              key={value}
              i={value}
              onSquareClick={onSquareClick}
              board={board}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Game;
