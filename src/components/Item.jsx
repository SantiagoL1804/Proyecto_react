import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({ producto }) {
  const { titulo, imagenURL } = producto;

  return (
    <Card style={{ width: "18rem", margin: "5px" }}>
      <Card.Img variant="top" src={imagenURL} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>

        <Button variant="success">Ver detalle del producto</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
