import React, { useEffect, useState } from "react";
import {
  TimelinePanel,
  TurnPanel,
  ScorePanel,
  Board,
  Square,
} from "./components";
import evaluator from "./services/evaluator";

function Game() {
  // Variable initializations
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [status, setStatus] = useState("on");
  const [scoreBoard, setScoreBoard] = useState({ home: 0, away: 0 });
  const [xNext, setXNext] = useState(true);
  const [timeline, setTimeline] = useState([]);

  // Click Handler
  const clickHandler = (i) => {
    if (evaluator(boardState)) {
      return;
    }
    if (boardState[i] && i) return;
    let newSquare = boardState.slice();
    if (xNext) {
      newSquare[i] = "X";
    } else {
      newSquare[i] = "O";
    }
    setXNext(!xNext);
    setBoardState(newSquare);
  };

  const nextRoundHandler = () => {
    setBoardState(Array(9).fill(null));
    setStatus("on");
    if (timeline.length > 2) {
      setTimeline([]);
    }
  };

  useEffect(() => {
    if (evaluator(boardState)) {
      setStatus(evaluator(boardState));
      setTimeline([...timeline, evaluator(boardState)]);
      switch (evaluator(boardState)) {
        case "X":
          setScoreBoard({
            ...scoreBoard,
            home:
              timeline.length > 1 ? scoreBoard.home + 3 : scoreBoard.home + 1,
          });
          break;
        case "O":
          setScoreBoard({
            ...scoreBoard,
            away:
              timeline.length > 1 ? scoreBoard.away + 3 : scoreBoard.away + 1,
          });
          break;
      }
    } else if (!boardState.includes(null)) {
      setStatus("dead-end");
    }
  }, [boardState]);

  // Rendering
  return (
    <div className="container-grid poppins-bold">
      <ScorePanel home={scoreBoard.home} away={scoreBoard.away} />
      <TurnPanel
        turn={xNext ? "X" : "O"}
        status={status}
        nextRound={nextRoundHandler}
      />
      <Board>
        <Square
          value={boardState[0]}
          onSquareClick={() => {
            clickHandler(0);
          }}
        />
        <Square
          value={boardState[1]}
          onSquareClick={() => {
            clickHandler(1);
          }}
        />
        <Square
          value={boardState[2]}
          onSquareClick={() => {
            clickHandler(2);
          }}
        />
        <Square
          value={boardState[3]}
          onSquareClick={() => {
            clickHandler(3);
          }}
        />
        <Square
          value={boardState[4]}
          onSquareClick={() => {
            clickHandler(4);
          }}
        />
        <Square
          value={boardState[5]}
          onSquareClick={() => {
            clickHandler(5);
          }}
        />
        <Square
          value={boardState[6]}
          onSquareClick={() => {
            clickHandler(6);
          }}
        />
        <Square
          value={boardState[7]}
          onSquareClick={() => {
            clickHandler(7);
          }}
        />
        <Square
          value={boardState[8]}
          onSquareClick={() => {
            clickHandler(8);
          }}
        />
      </Board>
      <TimelinePanel timeline={timeline} />
    </div>
  );
}

export default Game;
