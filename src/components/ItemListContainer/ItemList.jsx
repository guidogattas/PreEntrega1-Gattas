import Item from "../Item/Item";

const ItemList = ({ products }) => {

  
  return (
    // <div className="flex flex-wrap justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
