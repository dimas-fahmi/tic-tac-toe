import React, { useEffect, useState } from "react";

const ScorePanel = ({ home, away }) => {
  const [comment, setComment] = useState("START THE GAME, CHAMPION!");

  useEffect(() => {
    if (home == 0 && away == 0) {
      setComment("START THE GAME, CHAMPION!");
    } else if (home > away) {
      setComment("X is winning!!!");
    } else if (home == away) {
      setComment("Oh, It's TIED!");
    } else {
      setComment("O is winning!!!");
    }
  }, [home, away]);

  return (
    <div className="score">
      <div className="header">
        <h4 className="text-primary mb-2">SCORE</h4>
        <h4>{comment}</h4>
      </div>
      <div className="content">
        <div className="score-board">
          <div className="home">X</div>
          <div className="score">
            <div className="home">{home}</div>
            <div className="away">{away}</div>
          </div>
          <div className="away">O</div>
        </div>
      </div>
    </div>
  );
};

export default ScorePanel;
