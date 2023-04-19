import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Route } from "react-router-dom/cjs/react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CartContext from "../Store/cart-context";
import ProductDetails from "./ProductDetails";
import "./ProductItem.css";
import AuthContext from "../Store/auth-context";


const ProductItems = (props) => {
  const cartCntx = useContext(CartContext);
  const authCtx=useContext(AuthContext);
  
  
  
  const addItemToCart = (event) => {
    event.preventDefault();
    let email=authCtx.userEmail.replace(/[^a-zA-Z0-9 ]/g, '');
    console.log('hgdcjn',email)
    cartCntx.addItem({...props})
    fetch(`https://crudcrud.com/api/43713bfef0944e5c8ceff3f5be4ef568/${email}`,{
      method:'POST',
      body:JSON.stringify({
        title:props.title,
        price:props.price,
        imageUrl:props.imageUrl
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res)=>{
      if(res.ok){
        // console.log(res)
        return res.json();
      }
    }).then((data)=>{
      console.log(data)
    })
    // fetch(`https://crudcrud.com/api/f80ae6ad821e4884b72d596ab2d6e9c1/${email}`).then((res)=>{
    //   return res.json();
    // }).then((data)=>{
    //   console.log(data)
    //   cartCntx.addItem(data)
    // })
    
    // cartCntx.items.push({...props})
  };
    
  // console.log('after additemtocart',cartCntx.items)
  return (
    // <div>
    <div>
      <div className="p-1">
        <div>
          <div className="image">
            <img src={props.imageUrl}></img>
          </div>
          <Link to="/SHOP/productdetails">{props.title}</Link>
          <div>
            <p>$:{props.price}</p>
            <Button variant="success" onClick={addItemToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
        <br></br>
      </div>
    </div>
    // </div>
  );
};

export default ProductItems;
