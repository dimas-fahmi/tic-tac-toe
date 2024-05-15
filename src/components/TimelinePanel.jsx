import React from "react";

const TimelinePanel = ({ timeline }) => {
  return (
    <div className="timeline">
      <div className="header">TIMELINE</div>
      <div className="content">
        {timeline.length > 0 &&
          timeline.map((winner, index) => (
            <div
              className={
                "timeline-card poppins-bold " + (winner == "O" ? "o" : "")
              }
              key={index}
            >
              <h1>Round {index + 1}</h1>
              <h1 className="mt-2">
                <small>won by </small>
                {winner}
              </h1>
            </div>
          ))}
      </div>
      <div className="footer">
        <div>
          <h2>
            {3 - timeline.length <= 1 ? "BIG ROUND!" : 2 - timeline.length}
          </h2>
          <h4>
            {3 - timeline.length <= 1 ? (
              <>
                Bonus <span className="text-primary">2</span> Points
              </>
            ) : (
              <>
                Rounds <span className="text-primary">LEFT</span>
              </>
            )}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TimelinePanel;
