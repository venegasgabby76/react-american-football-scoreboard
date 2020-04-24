import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {


let [count , setCount] = useState(0);

let [blackhawlks, blackhawlksCount] = useState(0);

let [redwings, redwingsCount] = useState(0); 

  return (
    <div className="bottomRow">


      <div className="penalty_home">
      <button className="bh_penalty"
              onClick = {() => {
            blackhawlksCount(blackhawlks +1);
              }}
                >
                   <h3 className="period__title">Penatly</h3>
                    </button>
            <div className="away__value">{blackhawlks}</div>

            <button className="reset_bh"
          onClick={() => {
            blackhawlksCount(0);
          }}
        >
          Reset
        </button>

      </div>
      

      <section className="buttons">
      <div className="period">
        <button className="period_button" 
            onClick = {() => {
              setCount(count +1);
                }}
                  >
                    <h3 className="period__title">Period</h3>
           </button>
              <div className="period__value">{count}
        </div>
        <button className="reset_period"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
          
      </div>

    
      </section>

       
      
      <div className="away_penalty">
      <button className="rw_penalty"
              onClick = {() => {
            redwingsCount(redwings +1);
              }}
                >
                   <h3 className="period__title">Penatly</h3>
                    </button>
            <div className="away__value">{redwings}
            </div>
            <button className="reset_rw"
          onClick={() => {
            redwingsCount(0);
          }}
        >
          Reset
        </button>
      
      </div>
    </div>
  );
};

export default BottomRow;
