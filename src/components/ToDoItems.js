import React from "react";
import Item from "./Item";

export default function ToDoItems({ items, removeItem }) {
  return (
    <div className="items">
      {items.map(item => {
        return (
          <Item key={item} index={item} item={item} removeItem={removeItem} />
        );
      })}
    </div>
  );
}
