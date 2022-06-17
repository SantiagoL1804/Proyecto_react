import React, { useState, useEffect } from "react";
import {} from "../imagenes/logo.jpg";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import productos from "../../src/productos.json";
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

export default function ItemListContainer({ titulo }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [prod, setProd] = useState([]);
  const { categoriaId } = useParams();
  const [prodByCat, setProdByCat] = useState([]);

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
    // var filteredCategory = prod.filter(
    //   (prod) => prod.categoria === categoriaId
    // );
  }, [prod]);

  // useEffect(() => {
  //   if (prod.length > 0) {
  //     prodByCat(prod.filter((prod) => prod.categoria === categoriaId));
  //   }
  // }, [categoriaId]);

  useEffect(() => {
    if (prod.length > 0) {
      setProdByCat(prod.find((prod) => prod.categoria === categoriaId));
    }
  }, [prod]);

  console.log(prod);

  return (
    <>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
        Nuestros productos
      </h1>
      <ItemList productos={prod} />

      <ItemList productoCategoria={prodByCat} />
    </>
  );
}
