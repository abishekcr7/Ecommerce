import React from 'react'
import Button from "react-bootstrap/Button";
import './Cart.css'
import { propTypes } from 'react-bootstrap/esm/Image';
import { useContext } from 'react';
import CartContext from '../Store/cart-context';
import classes from './CartItem.module.css'

const CartItem = (props) => {
  const cartCntx=useContext(CartContext)
  const removeCartItem = (event)=>{
     cartCntx.removeItem(props.id)
  }

  
  


  return (
    <div>
        <li className={classes['cart-item']}>
          <h2>Name:{props.title}{" "}</h2>
          <div className="cartimage">
            <img src={props.imageUrl} size="5px"></img>
          </div>
          <div className={classes.summary}>Price-$:{props.price}</div>
          <Button  className="btn btn-danger btn-sm 5px" onClick={removeCartItem}>Remove</Button>
        </li>
    
    </div>
  )
  
}

export default CartItem