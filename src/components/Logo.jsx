import React from "react";
import LogoPagina from "../imagenes/logo.jpg";

function Logo() {
  return (
    <img
      style={{ height: "70px", marginLeft: "10px" }}
      src={LogoPagina}
      alt="Logo Golf ToURU"
    />
  );
}

export default Logo;