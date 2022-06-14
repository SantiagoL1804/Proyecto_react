import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [prod, setProd] = useState({});
  useEffect(() => {
    fetch(("productos.json", { method: "GET" }))
      .then((response) => response.json())
      .then((data) => {
        setProd(data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        //console.log("fin");
      });
  }, []);

  return (
    <div>
      <ItemDetail productoDetalle={prod} />{" "}
    </div>
  );
}

export default ItemDetailContainer;
