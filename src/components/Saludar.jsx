import React from "react";

export default function Saludar({ msj, quien, hacerUnAlert }) {
  return <div onClick={() => hacerUnAlert()}>{msj + " " + quien}</div>;
}
