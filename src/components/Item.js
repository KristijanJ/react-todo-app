import React from "react";

export default function Item({ item, index, removeItem }) {
  return (
    <div className="item">
      <span className="item-span">{item} </span>
      <span className="remove-item-span" onClick={() => removeItem(index)}>
        <i className="far fa-window-close"></i>
      </span>
    </div>
  );
}
