import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Saludar from "./components/Saludar";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting={"Bienvenido a Golf ToURU"} />
      </div>
    </>
  );
}

export default App;
