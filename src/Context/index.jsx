import React, { useState, useEffect, createContext} from 'react'
import db from "../../db/firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const CartContext = createContext();

function CartProvider({ children }) {

      const [ItemsList, setItems] = useState([]);
      const itemsCollectionRef = collection(db, "ItemList");
      const [loading, setLoading] = useState(true);

      const getItems = async () => {
        const querySnapshot = await getDocs(itemsCollectionRef);
        setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      };
    
      useEffect(() => {
        getItems();
      }, []);

      const [cart, setCart] = useState([]);
      const addCart = (id, value) => {
        const posicion = cart.findIndex(item => item.id === id);
        if (posicion === -1) {
          const items = ItemsList.filter(product => product.id === id);
          const itemsActualizados = items.map(item => ({ ...item, cantidad: parseInt(value) }));       
          setCart([...cart, ...itemsActualizados]);
        } else {
          const newCart = [...cart];
          newCart[posicion].cantidad = parseInt(newCart[posicion].cantidad) + parseInt(value);
          setCart(newCart);
        }
      }

    function vaciarCarrito(){
      setCart([])
    }
    function getSumaCart() {
      return cart.reduce((sum, item) => sum + item.cantidad, 0);
    }
    function eliminaItem(id) {
        let newCart = cart.filter((itemInCart) => (itemInCart.id !== id));
        setCart(newCart);
    }

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
    useEffect(() => {
      setCart(initialCart);
    }, []);

  return (
    <CartContext.Provider value={{cart, ItemsList, vaciarCarrito, setItems, loading, setLoading, addCart, getSumaCart, eliminaItem }}>
      {children}
    </CartContext.Provider>
  )
}
export { CartProvider, CartContext };
export default CartContext;