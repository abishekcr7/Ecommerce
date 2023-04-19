import React from "react";
import { Button } from "react-bootstrap";
const ProductDetails = (props) =>{
    return (<div>
        <div className="p-1">
          <div>
            <div className="image">
              <img src={props.imageUrl}></img>
            </div>
            <h2>{props.title}</h2>
            <div>
              <p>$:{props.price}</p>
              <Button variant="success" onClick={props.addItemToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
          <br></br>
        </div>
      </div>)
}

export default ProductDetails;
