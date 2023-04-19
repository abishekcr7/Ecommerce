// import React, { useState } from "react";
// import NavBar from "./NavBar";
// import AvailableProduct from "./AvailableProduct";
// import Pricing from "./Pricing";
// import HomePage from "./HomePage";
// import ContactUs from "./ContactUs";
// import { Route } from "react-router-dom";
// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import { Button } from "react-bootstrap";

// // const router = createBrowserRouter([
// //   { path: "/Home", element: <HomePage /> },
// //   { path: "/", element: <AvailableProduct /> },
// //   { path: "/About", element: <Pricing /> },
// // ]);
// const MainPage = (props) => {
//   const [home, setHome] = useState(false);
//   const [shop, setShop] = useState(true);
//   const [pricing, setPricing] = useState(false);
//   const [contactus,setContactUs]=useState(false);

//   const showShop = () => {
//    setHome(false);
//     setShop(true);
//     setPricing(false);
//     setContactUs(false)
//   };

// const showHome = () => {
//     setHome(true);
//      setShop(false);
//     setPricing(false);
//     setContactUs(false)
//   };
// const showPricing = () => {
//     setPricing(true);
//     setHome(false);
//     setShop(false);
//     setContactUs(false)
// };
// const showContact = () =>{
//     setContactUs(true)
//     setPricing(false);
//     setHome(false);
//     setShop(false);
// }
//   return (
//     <div>
//       <NavBar
//         showCart={props.showCart}
//         showHome={showHome}
//         showPricing={showPricing}
//         showShop={showShop}
//         showContact={showContact}
//         shop={shop}
//       /><br></br>
//       {/* <RouterProvider router={router} /> */}
//       <Route to='/'><AvailableProduct /></Route>
//       <Route to='/HOME'> <HomePage /></Route>
//       <Route to='/PRICING'><Pricing /></Route>
//       <Route to='/CONTACTUS'><ContactUs addDetailsHandler={props.addDetailsHandler}/></Route>
//     </div>
//   );
// };

// export default MainPage;
