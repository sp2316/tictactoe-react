import React from "react";
import "../css/Square.css";

function Square(props) {
  const { i, onSquareClick, board } = props;
  return (
    <div className="box" onClick={() => onSquareClick(i)}>
      <div> {board[i]}</div>
    </div>
  );
}

export default Square;
