import React from "react";

export default function AddItem({ handleSubmit, handleInputChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Enter a new to-do item..."
      />
      <button type="submit">Add item</button>
    </form>
  );
}
