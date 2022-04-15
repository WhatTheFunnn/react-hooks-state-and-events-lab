import React, {useState} from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState(false)
  
  function cart(){
      setInCart((inCart) => !inCart)
  }

  const innerCart = inCart ? "in-cart" : ""
 
  return (
    <li className={innerCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cart}>{inCart ? "Add to" : "Remove from"} Cart</button>
    </li>
  );
}

export default Item;
