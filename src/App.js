import { useState } from "react";
import Cart from "./components/Cart/Cart";
import "./App.css";
import CartProvider from "./components/Store/CartProvider";
import NavBar from "./components/Layout/NavBar";
import AvailableProduct from "./components/Layout/AvailableProduct";
import Pricing from "./components/Layout/Pricing";
import HomePage from "./components/Layout/HomePage";
import ContactUs from "./components/Layout/ContactUs";
import ProductDetails from "./components/Layout/ProductDetails";
import { Route, Switch,Redirect } from "react-router-dom/cjs/react-router-dom.min";
import LoginForm from "./components/Layout/LoginForm";
import { useContext } from "react";
import AuthContext from "./components/Store/auth-context"
import CartContext from "./components/Store/cart-context";

function App() {
  const [cart, setCart] = useState(false);
  const authCtx=useContext(AuthContext)
  // const cartCntx=useContext(CartContext) 
  const cartCntx=useContext(CartContext)
  
  const showCart = () => {
    setCart(true);
    // let email=authCtx.userEmail.replace(/[^a-zA-Z0-9 ]/g, '');
    //   fetch(`https://crudcrud.com/api/9cd123cdf38d4c31b8ac07754149743d/${email}`).then((res)=>{
    //     return res.json();
    //   }).then((data)=>{
    //     console.log(data)
    //     data.map((item)=>{
    //       console.log(item)
    //       cartCntx.addItem(item)
    //       console.log(cartCntx.items)
    //   })
    // })
   
  };
  

  async function addDetailsHandler(details) {
    const response = await fetch(
      "https://ecommerce-6e89f-default-rtdb.firebaseio.com/details.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  const product = (details)=>{
    console.log(details)
  }

  return (
    <CartProvider>
      {cart && <Cart show={cart} onHide={() => setCart(false)} />}
      <div>
        <NavBar showCart={showCart} />
        <br></br>
      </div>
      <div>
      {authCtx.isLoggedin && <h1>Welcome to the Shop</h1>}
        <Switch>
          <Route path="/SHOP" exact>
           {authCtx.isLoggedin && <AvailableProduct onAddDetails={product}/>}
           {!authCtx.isLoggedin && <Redirect to='/LOGIN'/>}
          </Route>
          <Route path="/HOME">
            {" "}
            <HomePage />
          </Route>
          <Route path="/ABOUT">
            <Pricing />
          </Route>
          <Route path="/CONTACTUS">
            <ContactUs addDetailsHandler={addDetailsHandler} />
          </Route>
          <Route path="/SHOP">
            {authCtx.isLoggedin &&<ProductDetails />}
          </Route>
          {!authCtx.isLoggedin && <Route path='/LOGIN'>
            <LoginForm />
          </Route>}
          <Route path='*'>
            <Redirect to='/SHOP' />
          </Route>
        </Switch>
      </div>
    </CartProvider>
  );
}

export default App;
