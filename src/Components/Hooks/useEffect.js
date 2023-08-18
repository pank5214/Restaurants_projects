import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () => {
  const [myNum, setMyNum] = useState(0);
  useEffect(() => {
      document.title = `Chats(${myNum})`;
      // console.log("Hello!");
  });
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
          Increament
        </div>
      </div>
    </>
  );
};

export default UseEffect;
