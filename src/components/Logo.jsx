import React from "react";
import LogoPagina from "../imagenes/logo.jpg";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        style={{ height: "70px", marginLeft: "10px" }}
        src={LogoPagina}
        alt="Logo Golf ToURU"
      />
    </Link>
  );
}

export default Logo;
