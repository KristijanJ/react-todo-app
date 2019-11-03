import React, { Component } from "react";
import ToDoItems from "./components/ToDoItems";
import AddItem from "./components/AddItem";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 1,
          value: "Take the dog for a walk",
          completed: false
        },
        {
          id: 2,
          value: "Study for the exam",
          completed: false
        },
        {
          id: 3,
          value: "Buy new tires for the car",
          completed: false
        }
      ],
      newItem: {
        id: "",
        value: "",
        completed: false
      }
    };
  }

  handleInputChange = e => {
    this.setState({
      newItem: {
        id: Date.now(),
        value: e.target.value,
        completed: false
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addItem(this.state.newItem, e);
  };

  addItem = (newItem, e) => {
    let items = [...this.state.items];

    if (newItem.value === "") {
      alert("Please enter an Item");
    } else {
      items.push(newItem);
      this.setState({
        items,
        newItem: {
          id: "",
          value: "",
          completed: false
        }
      });
      e.target.children[0].value = "";
    }
  };

  removeItem = index => {
    let items = [...this.state.items].filter(item => item.id !== index);
    this.setState({ items });
  };

  completeItem = index => {
    let items = [...this.state.items];
    items.forEach(item => {
      if (item.id === index) {
        item.completed === false
          ? (item.completed = true)
          : (item.completed = false);
      }
    });
    this.setState({ items });
  };

  render() {
    return (
      <div className="main">
        <h1 className="title">ToDo App</h1>
        <ToDoItems
          items={this.state.items}
          removeItem={this.removeItem}
          completeItem={this.completeItem}
        />
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
