import React from "react";
import ProductItems from "./ProductItems";

const productsArr = [
  {
    id:Math.random(),
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id:Math.random(),
    title: "Acrlyic",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id:Math.random(),
    title: "Yellow Black",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id:Math.random(),
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableProduct = (props) => {
  const productList = productsArr.map((item) => (
    <ProductItems
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
    ></ProductItems>
  ));

  return (
    <section>
      <div className="d-flex flex-row justify-content-center">{productList}</div>
    </section>
  );
};

export default AvailableProduct;
