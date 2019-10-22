import React, { Component } from "react";
import ToDoItems from "./components/ToDoItems";
import AddItem from "./components/AddItem";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: ["To do item 1", "To do item 2", "To do item 3"],
      newItem: ""
    };
  }

  handleInputChange = e => {
    this.setState({ newItem: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addItem(this.state.newItem, e);
  };

  addItem = (newItem, e) => {
    let items = [...this.state.items];

    if (newItem === "") {
      alert("Please enter an Item");
    } else if (items.includes(newItem)) {
      alert("Item already exists");
    } else {
      items.push(newItem);
      this.setState({
        items,
        newItem: ""
      });
      e.target.children[0].value = "";
    }
  };

  removeItem = index => {
    let items = [...this.state.items].filter(item => item !== index);
    this.setState({ items });
  };

  render() {
    return (
      <div className="main">
        <h1 className="title">ToDo App</h1>
        <ToDoItems items={this.state.items} removeItem={this.removeItem} />
        <hr className="hr-divider" />
        <AddItem
          addItem={this.addItem}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
