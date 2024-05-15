import React from "react";

const TurnPanel = ({ status, turn, nextRound }) => {
  return (
    <div className="turn">
      <div className="header">
        <h4>
          {status == "on"
            ? "TURN"
            : status == "dead-end"
            ? "NO WINNER"
            : `${status} WON!`}
        </h4>
      </div>
      <div className="content">
        {status == "on" ? (
          turn
        ) : status == "dead-end" ? (
          <button className="next-round-button" onClick={nextRound}>
            RESTART!
          </button>
        ) : (
          <button className="next-round-button" onClick={nextRound}>
            NEXT ROUND
          </button>
        )}
      </div>
    </div>
  );
};

export default TurnPanel;
