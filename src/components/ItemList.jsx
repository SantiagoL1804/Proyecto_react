import React from "react";
import Item from "./Item";
import { Card, Button } from "react-bootstrap";

export default function ItemList({ productos, productoCategoria }) {
  return (
    <>
      {/* <div className="d-flex">
        {productos?.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div> */}
      <div className="d-flex">
        {productoCategoria?.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
}
