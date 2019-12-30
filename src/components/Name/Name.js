import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Name.css";
//import store: an object with a method on it called dispatch that we use to send actions to the reducer
//use this method twice for each piece of data that this component needs to save to Redux
import store, { UPDATE_NAME, UPDATE_CATEGORY } from './../../store.js'

class Name extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      category: reduxState.category
    };
    //getState method lives on store and we can use it to access the redux state object 
    //getState method is invoked inside our constructor and store the return value in a constant
    //stored in constructor so we can use the value in our component's initial state 
  }
  handleNameChange(nameVal) {
    this.setState({
      name: nameVal
    });
  }

  handleCategoryChange(catVal) {
    this.setState({
      category: catVal
    });
  }
  saveChanges() {
    // Send data to Redux state
    //use dispatch method off of the store to send an action object
    //the object should have a payload that sends the value of the name and category input box
    store.dispatch({
      type:UPDATE_NAME,
      payload: this.state.name
    });
    store.dispatch({
      type: UPDATE_CATEGORY,
      payload: this.state.category
    });
    //sends an action object to the reducer 
  }
  render() {
    return (
      <div className="Name forms">
        <div className="input_container">
          <h2>Recipe Name:</h2>
          <input
            value={this.state.name}
            onChange={e => this.handleNameChange(e.target.value)}
          />
        </div>
        <div className="input_container">
          <h2>Category:</h2>
          <select
            value={this.state.category}
            onChange={e => this.handleCategoryChange(e.target.value)}
          >
            <option value={""}>----</option>
            <option value={"Breakfast"}>Breakfast</option>
            <option value={"Second Breakfast"}>Second Breakfast</option>
            <option value={"Brunch"}>Brunch</option>
            <option value={"Lunch"}>Lunch</option>
            <option value={"Dinner"}>Dinner</option>
            <option value={"Drinks"}>Drinks</option>
            <option value={"Dessert"}>Dessert</option>
          </select>
        </div>
        <Link to="/add/author">
          <button onClick={() => this.saveChanges()} className="right_button">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Name;
