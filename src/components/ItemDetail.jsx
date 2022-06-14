import React from "react";
import { Card, Button } from "react-bootstrap";

function ItemDetail({ productoDetalle }) {
  return (
    <div className="d-flex">
      <Card style={{ width: "18rem", margin: "5px" }}>
        <Card.Img variant="top" src={productoDetalle.imagenURL} />
        <Card.Body>
          <Card.Title>{productoDetalle.titulo}</Card.Title>
          <Card.Text>{productoDetalle.descripcion}</Card.Text>
          <Card.Text style={{ fontWeight: "bold" }}>
            USD {productoDetalle.precio}
          </Card.Text>
          <Button variant="success">Comprar</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
