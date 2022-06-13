import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Saludar from "./components/Saludar";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Test from "./components/Test";
import ItemCount from "./components/ItemCount";
import TestPromesas from "./components/TestPromesas";

function App() {
  const onAdd = (y) => {
    alert(`Agregaste ${y} productos al carrito`);
  };
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting={"¡Bienvenido a Golf ToURU!"} />
        {/* <Test desde={0} /> */}
        <br />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        {/* <TestPromesas /> */}
      </div>
    </>
  );
}

export default App;
