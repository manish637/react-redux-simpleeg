import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 1
    };
  }
  increment = () => {
    console.log("inside increment");
    this.props.dispatch({ type: "INCREMENT", payload: this.state.x });
  };

  decrement = () => {
    console.log("inside increment");
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div className="App">
        <h2>Counter</h2>
        <div>
          <button onClick={this.increment}>+</button>
          <span className="counter">{this.props.count}</span>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(App);
