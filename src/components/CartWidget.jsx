import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartWidget() {
  return (
    <div className="d-flex flex-row ">
      <FontAwesomeIcon icon={faCartShopping} />
      <p>4</p>
    </div>
  );
}
