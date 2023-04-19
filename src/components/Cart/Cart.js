import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartItem from "./CartItem";
import "./Cart.css";
import CartContext from "../Store/cart-context";
import { useContext } from "react";
import AuthContext from "../Store/auth-context";
const Cart = (props) => {
    const cartCntx=useContext(CartContext)
    // const authCtx=useContext(AuthContext)
    const hasItem= cartCntx.items.length >= 1
    let totalAmount=0
    cartCntx.items.map((item)=>{
       totalAmount=totalAmount+item.price;
    })
    // let email=authCtx.userEmail.replace(/[^a-zA-Z0-9 ]/g, '');

    // async function cartA (){
    // const response=await fetch(`https://crudcrud.com/api/f80ae6ad821e4884b72d596ab2d6e9c1/${email}`)
    // const data=await response.data
    // console.log(data)

    // }
    //   fetch(`https://crudcrud.com/api/f80ae6ad821e4884b72d596ab2d6e9c1/${email}`).then((res)=>{
    //   return res.json();
    // }).then((data)=>{
    //   console.log(data)
    //   cartCntx.add
    // })
    

    const cartArr = (
        <ul className="list-group">
          {cartCntx.items.map((item) => (
            <CartItem
              key={item._id}
              id={item._id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl} />
          ))}
        </ul> )
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">CART</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>CART ITEMS</h4>
        <div>{cartArr}</div>
        <div class="justify-content-left">TOTAL : {totalAmount}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        {hasItem && <Button>Purchase</Button>}
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
