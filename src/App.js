import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";

function App() {
  const onAdd = (y) => {
    alert(`Agregaste ${y} productos al carrito`);
  };
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="/category/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>

        <br />
        {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
        {/* <TestPromesas /> */}
        <br />
        {/* <ItemDetailContainer /> */}
      </div>
    </>
  );
}

export default App;
