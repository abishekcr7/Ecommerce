import React from 'react';

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart:()=>{},
  totalAmount:0
});

export default CartContext;