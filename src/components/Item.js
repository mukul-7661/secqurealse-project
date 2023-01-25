import React, { useState } from "react";
import "./Item.css";

function Item(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={
        clicked && props.clickedId === props.ID ? "item__clicked" : "item"
      }
      onClick={() => {
        setClicked(true);
        props.onClickHandler(props.ID);
      }}
    >
      <div className="item__box">
        <p>
          {props.ID}: {props.Location}
        </p>
        <p className="item__small">
          {props.Date} {props.Time}
        </p>
      </div>
      <p className="item__para">Person Detected</p>
    </div>
  );
}

export default Item;
