import React, { Component } from "react";
import ToDoItems from "./components/ToDoItems";
import AddItem from "./components/AddItem";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: ["To do item 1", "To do item 2", "To do item 3"]
    };
  }

  addItem = newItem => {
    let items = [...this.state.items];

    if (newItem === "") {
      alert("Please enter an Item");
    } else if (items.includes(newItem)) {
      alert("Item already exists");
    } else {
      items.push(newItem);
      this.setState({ items });
    }
  };

  removeItem = index => {
    let items = [...this.state.items].filter(item => item !== index);
    this.setState({ items });
  };

  render() {
    return (
      <div className="main">
        <h1>ToDo App</h1>
        <ToDoItems items={this.state.items} removeItem={this.removeItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}
