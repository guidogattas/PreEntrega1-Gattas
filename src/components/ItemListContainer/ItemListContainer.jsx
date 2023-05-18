import data from "../../data/Data";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ItemListContainer_Search from "./ItemListContainer_Search";


function getData() {
  return new Promise(
    (resolve)=>{
    setTimeout(()=>{
      resolve(data);
    }, 1000);
  })
}



const ItemListContainer = () => {

  let [products, setProducts] = useState([])

  useEffect(() => {
    getData().then((respuesta)=>{
      setProducts(respuesta);
    });

  }, []);


  return (
    <>
      <ItemListContainer_Search
        products={products}
      />
      <h1 className="mb-3 text-center font-extrabold">Catálogo</h1>
      <ItemList
      products={products}
      /> 
    </>
  );
};

export default ItemListContainer;
