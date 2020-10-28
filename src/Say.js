import React, { useState } from "react";

const Say = () => {
  // function() {}
  const [message, setMessage] = useState("Um.....");
  const onClickEnter = () => setMessage("Hi");
  const onClickLeave = () => setMessage("Bye");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>Entrance</button>
      <button onClick={onClickLeave}>Exit</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        RED
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        GREEN
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        BLUE
      </button>
    </div>
  );
};

export default Say;
