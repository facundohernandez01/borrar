import styles from "./item.module.css";
import { CartContext } from "../Context"
import { useContext, useState } from "react";
import {Button} from '@mui/material/Button';

const Item = ({item}) => {
  const {  addCart, eliminaItem } = useContext(CartContext);

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.price} $</p>
      <img src={item.image_url}></img>
      <Button variant="outlined"  onClick={() => eliminaItem(item.id)}>Eliminar</Button>
      <Button variant="outlined"  onClick={() => addCart(item.id)}>Add to cart</Button>

    </div>
  );



};



export default Item;
