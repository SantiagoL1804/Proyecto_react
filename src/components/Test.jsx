import React, { useState, useEffect } from "react";

function Test({ desde }) {
  const [x, setX] = useState(0);

  console.log("render");
  return (
    <>
      <div style={{ border: "1px solid green", height: "200px" }}>
        Contador: {x}
        <br />
        <button
          onClick={() => {
            setX(x + 1);
          }}
        >
          SUMAR
        </button>
        <button
          onClick={() => {
            setX(x - 1);
          }}
        >
          RESTAR
        </button>
        <br />
        <button
          onClick={() => {
            setX(0);
          }}
        >
          RESET
        </button>
      </div>
    </>
  );
}

export default Test;
