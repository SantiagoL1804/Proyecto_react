import React from "react";
import ListadoMostrar from "./ListadoMostrar";

export default function ListadoContainer() {
  let alumnos = ["Juan Maria", "Santiago", "Luis"];
  alumnos.push("Mailen");
  return <ListadoMostrar alumnos={alumnos} />;
}
