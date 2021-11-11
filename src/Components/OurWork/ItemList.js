import React from "react";
import "./OurWork.css";

const ItemList = (props) => {
  return (
    <li id={props.id} className={props.class}>
      <button
        id={props.idBtn}
        className={props.classBtn}
        onClick={props.func}
        /* onMouseEnter={() => console.log("hello")}
        onMouseLeave={() => console.log("bye")} */
      >
        {props.title}
      </button>
      <p id={props.idP} className={props.classP}>
        {props.description}
      </p>
    </li>
  );
};

export default ItemList;
