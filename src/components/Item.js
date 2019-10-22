import React from "react";

export default function Item({ item, index, removeItem }) {
  return (
    <div>
      <span>{item} </span>
      <span onClick={() => removeItem(index)}> X</span>
    </div>
  );
}
