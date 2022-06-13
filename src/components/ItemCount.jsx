import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

function ItemCount({ initial, stock, onAdd }) {
  const [y, setY] = useState(initial);
  const sumar = () => {
    y < stock ? setY(y + 1) : alert("No hay más de este producto en stock");
  };
  const restar = () => {
    y > initial ? setY(y - 1) : alert("No podés quitar más productos");
  };
  const reset = () => {
    setY(initial);
  };
  return (
    <>
      <h4 className="m-3">Driver Taylormade SIM2</h4>
      <div className="d-flex m-3">
        <button onClick={restar} type="button" className="btn btn-success">
          -
        </button>
        <div
          className="width-3"
          style={{
            border: "1px solid green",
            width: "200px",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          {y}
        </div>
        <button onClick={sumar} type="button" className="btn btn-success">
          +
        </button>
      </div>
      <button
        onClick={() => {
          onAdd(y);
          reset();
        }}
        style={{
          width: "200px",
        }}
        type="button"
        className="btn btn-secondary mx-5"
      >
        Agregar al carrito
      </button>
    </>
  );
}

export default ItemCount;
