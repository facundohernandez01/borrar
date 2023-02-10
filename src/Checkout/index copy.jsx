import db from "../../db/firebase-config.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import {CartContext} from '../Context/index';


const Checkout = () => {
  const { cart, ItemList} = useContext(CartContext);

  const [inputNombre, setInputNombre] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputURL, setInputURL] = useState("");
  const [inputCat, setInputCat] = useState("");

  const createItem = async (e) => {
    e.preventDefault();
    const itemsCollectionRef = collection(db, "ordenes");
    cart.forEach(item => {
      const carrito = {
        title: item.title,
        price: item.price
      };
      addDoc(itemsCollectionRef, carrito);
    });
  };

  return (
    <div>
      <form onSubmit={createItem}>
        <input
          type="text"
          value={inputNombre}
          placeholder="Nombre"
          onChange={(e) => setInputNombre(e.target.value)}
        />
        <input
          type="email"
          value={inputEmail}
          placeholder="Email"
          onChange={(e) => setInputEmail(e.target.value)}
        />

        <button type="submit">Agregar ítem</button>
      </form>

    </div>
  );
};

export default Checkout;
