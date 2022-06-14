import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import productos from "../../src/productos.json";

function ItemDetailContainer() {
  const [prod, setProd] = useState({});
  const [prodById, setProdById] = useState([]);
  useEffect(() => {
    const pedidos = new Promise((res, rej) => {
      res(productos);
    });
    pedidos
      .then((result) => {
        setProd(result);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log("fin");
      });
  }, []);
  console.log(prod);
  console.log(productos);

  useEffect(() => {
    if (prod.length > 0) {
      setProdById(prod.find((prod) => prod.id === 1));
    }
  }, [prod]);
  console.log(prodById);

  return (
    <div>
      <ItemDetail productoDetalle={prodById} />{" "}
    </div>
  );
}

export default ItemDetailContainer;
