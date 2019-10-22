import React, { Component } from "react";

export default class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }

  handleChange = e => {
    this.setState({ newItem: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({ newItem: "" });
    e.target.children[0].value = "";
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add item</button>
      </form>
    );
  }
}
