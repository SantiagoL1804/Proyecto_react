import React from "react";
import CartWidget from "./CartWidget";
import logo from "../imagenes/logo192.png";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg text-bg-success ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            class="d-block mx-auto "
            src="/public/imagenes/logo192.png"
            alt="Logo Golf ToURU"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse align-items-center" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item ">
              <a
                class="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Tienda
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div class="nav-item ">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
