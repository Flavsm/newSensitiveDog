import React from "react";
import "./OurWork.css";

const ItemList = (props) => {
  return (
    <li id={props.id} className={props.class}>
      <button id={props.idBtn} className={props.classBtn} onClick={props.func}>
        {props.title}
      </button>
      <p id={props.idP} className={props.classP}>
        {props.description}
      </p>
    </li>
  );
};

export default ItemList;
