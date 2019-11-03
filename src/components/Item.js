import React from "react";

export default function Item({
  item,
  index,
  completed,
  removeItem,
  completeItem
}) {
  return (
    <div className="item">
      {completed ? (
        <span className="item-span completed">{item} </span>
      ) : (
        <span className="item-span">{item} </span>
      )}
      <div className="action-buttons">
        <span className="action-item-span" onClick={() => completeItem(index)}>
          <i className="fas fa-check"></i>
        </span>
        <span className="action-item-span" onClick={() => removeItem(index)}>
          <i className="fas fa-times"></i>
        </span>
      </div>
    </div>
  );
}
