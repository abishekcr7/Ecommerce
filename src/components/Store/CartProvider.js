import { useState, useEffect } from "react";

import CartContext from "./cart-context";
import { useContext } from "react";
import AuthContext from "./auth-context";

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const cartCntx = useContext(CartContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let email = authCtx.userEmail.replace(/[^a-zA-Z0-9 ]/g, "");
    fetch(`https://crudcrud.com/api/43713bfef0944e5c8ceff3f5be4ef568/${email}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        data.map((item) => {
          console.log(item);
          items.push(item);
          setItems(items);
          // console.log(cartCntx.items)
        });
      });
  }, []);

  const addItemToCartHandler = (item) => {
    // items.push(item)
    setItems([...items, item]);
    console.log("items", items);
  };

  

  const removeItemFromCartHandler = (id) => {
    const newItems=items.filter((obj)=>{
      return obj._id !==id
    })
    // setItems(newItems)
    let email = authCtx.userEmail.replace(/[^a-zA-Z0-9 ]/g, "")
    fetch(`https://crudcrud.com/api/43713bfef0944e5c8ceff3f5be4ef568/${email}/${id}`,{method:'DELETE'}).then((res)=>{
    // window.location.reload()
    setItems(newItems)  
    return res.json();
    })
    // .then((data)=>{
      
    // })
  };
  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message: "Click here",
    totalAmount: 0,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
