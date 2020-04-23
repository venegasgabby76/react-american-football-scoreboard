import React from "react";
import "./App.css";

const BottomRow = () => {
  return (
    <div className="bottomRow">
      <div className="penalty_home">
        <h3 className="home__title">Penalty</h3>
        <div className="home__value">0</div>
      </div>
      

      <div className="period">
        <h3 className="period__title">Period</h3>
        <div className="period__value">0</div>
      </div>
      
      
      <div className="away_penalty">
        <h3 className="away__title">Penalty</h3>
        <div className="away__value">0</div>
      
      </div>
    </div>
  );
};

export default BottomRow;
