import React, { useState } from "react";
import "./style.css";

const UseState = () => {
  const [myNum, setMyNum] = useState(1);
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
          INCR
        </div>
        <div
          className="button2"
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}
        >
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
