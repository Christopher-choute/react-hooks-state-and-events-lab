import React, {useState}from "react";


function Item({ name, category }) {

const[toggleCart,setCart] = useState("")


  function toggleClass(){
   setCart(!toggleCart)
  }
  
  return (
    <li className={!toggleCart ? "": "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick= {toggleClass}>{toggleCart ? "Remove" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
