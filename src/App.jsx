import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { useState } from "react";

const App = () => {
  const [cantidad, setCantidad] = useState(1);

  return (
    <>
      <NavBar
        cantidad={cantidad}
      />
      <ItemDetailContainer />
      <ItemListContainer
        cantidad={cantidad}
        setCantidad={setCantidad}
        greeting="Bienvenido"
      />
    </>
  );
};

export default App;
