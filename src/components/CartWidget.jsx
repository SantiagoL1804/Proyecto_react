import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartWidget({ items }) {
  return (
    <div className="d-flex flex-row text-light d-flex align-items: baseline">
      <FontAwesomeIcon icon={faCartShopping} />
      <span>{items}</span>
    </div>
  );
}
