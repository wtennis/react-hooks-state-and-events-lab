import React, {useState} from "react";

function Item({ name, category }) {
const [inCart, setInCart] = useState(false)

  function handleAddItem() {
    setInCart(inCart => !inCart)
  }
  
  return (
    <li className={inCart? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {handleAddItem} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
