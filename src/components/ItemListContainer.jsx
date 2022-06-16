import React, { useState, useEffect } from "react";
import {} from "../imagenes/logo.jpg";
import ItemList from "./ItemList";
import driver from "../imagenes/driver.jpg";
import hierro from "../imagenes/hierro.jpg";
import putter from "../imagenes/putter.jpg";
import { useParams } from "react-router-dom";
import productos from "../../src/productos.json";
import { Link } from "react-router-dom";

export default function ItemListContainer({ titulo }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [prod, setProd] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const prod = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
        rej("Hubo un error al cargar los productos");
      }, 2000);
    });

    prod
      .then((result) => {
        setProd(result);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(prod);

  return (
    <>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
        Nuestros productos
      </h1>
      <ItemList productos={prod} />
    </>
  );
}
