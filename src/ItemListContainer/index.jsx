import ItemList from "../ItemList/index";
import { useContext } from "react";
import { CartContext } from '../Context/index';
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

  const { cart, addCart, ItemsList } = useContext(CartContext)
  const { categoria } = useParams();
  let filtraCat =  ItemsList.filter((producto) => producto.categoria == categoria )
  let productos = filtraCat=='' ? filtraCat = ItemsList : filtraCat

  
  return (
    <>
      {productos.map((item) => {
        return (
          <ItemList item={item} key={item.id} />
        );
      })}
    </>
  );
};

export default ItemListContainer;
