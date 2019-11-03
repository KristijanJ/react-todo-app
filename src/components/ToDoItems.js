import React from "react";
import Item from "./Item";

export default function ToDoItems({ items, removeItem, completeItem }) {
  return (
    <div className="items">
      {items.map(item => {
        return (
          <Item
            key={item.id}
            index={item.id}
            item={item.value}
            completed={item.completed}
            removeItem={removeItem}
            completeItem={completeItem}
          />
        );
      })}
    </div>
  );
}
