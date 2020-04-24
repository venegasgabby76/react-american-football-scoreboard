//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  //first we are going ot be declaring the sates here
  // number one will go to the lions. 
  let [lions, lionsCount] = useState(0);

  

  //number two will be going to the tigers.
  let [tigers, tigersCount] = useState(0)
   


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">BLACKHAWKS</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
  <div className="home__score">{lions}</div>
          
          </div>


          <div className="timer">00:00</div>
          <div className="away">
            <h2 className="away__name">RED WINGS</h2>
  <div className="away__score">{tigers}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" 
            onClick = {() => {
              lionsCount(lions +1);
                }}
                  >
           Blackhawlks Score
           </button> 
             

            <button className="reset_home"
          onClick={() => {
            lionsCount(0);
          }}
        >
          Reset
        </button>
        </div>

        <div className="awayButtons">
          <button className="awayButtons__touchdown"
            onClick = {() => {
              tigersCount(tigers +1);
                }}
                  >
            Red Wings Score</button>



                <button className="reset_away"
          onClick={() => {
            tigersCount(0);
          }}
        >
          Reset
        </button>
                 
      </div>


    </section>
    </div>
  );
}

export default App;
