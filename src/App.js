import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "./actions";

import item1 from "../src/images/firetv.jpg";
import item2 from "../src/images/gamingdesktop.jpg";
import item3 from "../src/images/IPHONE.jpg";

const items = [
  { id: 1, name: "Item 1", price: 10, image: item1 },
  { id: 2, name: "Item 2", price: 20, image: item2 },
  { id: 3, name: "Item 3", price: 30, image: item3 },
];

function App(props) {
  const handleRemoveFromCart = (item) => {
    props.removeFromCart(item.id);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} className="item-image" />
            {item.name} - ${item.price}{" "}
            <button onClick={() => props.addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {props.cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} className="item-image" />
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
