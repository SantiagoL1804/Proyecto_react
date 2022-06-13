import React, { useState, useEffect } from "react";
import {} from "../imagenes/logo.jpg";
import ItemList from "./ItemList";
import driver from "../imagenes/driver.jpg";
import hierro from "../imagenes/hierro.jpg";
import putter from "../imagenes/putter.jpg";

export default function ItemListContainer({ greeting }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productos = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          {
            id: 1,
            titulo: "Driver Taylormade",
            descripcion:
              "Driver Taylormade MAX2 con vara de grafito stiff y grip Golf Pride",
            precio: 250,
            imagenURL: driver,
          },
          {
            id: 2,
            titulo: "Hierros PING",
            descripcion:
              "Hierro PING i500 con vara de acero x-stiff y grip Golf Pride",
            precio: 600,
            imagenURL: hierro,
          },
          {
            id: 3,
            titulo: "Putter Scotty Cameron",
            descripcion:
              "Putter Scotty Cameron de 35 pulgadas y cara con forma mallet",
            precio: 200,
            imagenURL: putter,
          },
        ]);
        rej("Hubo un error al cargar los productos");
      }, 2000);
    });

    productos
      .then((result) => {
        setProductos(result);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(productos);

  return (
    <>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>{greeting}</h1>
      <ItemList productos={productos} />
    </>
  );
}
