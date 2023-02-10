import db from "../../db/firebase-config.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import {CartContext} from '../Context/index';

const Form = () => {
  const { cart, addCart, ItemList, setItems } = useContext(CartContext);

  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputURL, setInputURL] = useState("");
  const [inputCat, setInputCat] = useState("");

  const createItem = async (e) => {
    e.preventDefault();
    const item = {
      categoria: inputCat,
      description: inputDesc,
      image_url: inputURL,
      price: inputPrice,
      title: inputTitle,
    };
    const itemsCollectionRef = collection(db, "ItemList");
    await addDoc(itemsCollectionRef, item); //inserta el item en la colección
    const data = await getDocs(itemsCollectionRef);
    setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //actualiza el estado de items
    setInputTitle("");
    setInputPrice("");
    setInputURL("");
    setInputDesc("");
    setInputCat("");
  };

  return (
    <div>
      <form onSubmit={createItem}>
        <input
          type="text"
          value={inputTitle}
          placeholder="Título"
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <input
          type="number"
          value={inputPrice}
          placeholder="Precio"
          onChange={(e) => setInputPrice(e.target.value)}
        />
        <input
          type="text"
          value={inputURL}
          placeholder="URL"
          onChange={(e) => setInputURL(e.target.value)}
        />
        <input
          type="text"
          value={inputDesc}
          placeholder="Desc"
          onChange={(e) => setInputDesc(e.target.value)}
        />
      <input
          type="text"
          value={inputCat}
          placeholder="Categoria"
          onChange={(e) => setInputCat(e.target.value)}
        />
        <button type="submit">Agregar ítem</button>
      </form>
    </div>
  );
};

export default Form;
