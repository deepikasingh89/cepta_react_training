import React, { Component } from "react";
import '../todoList/todolist.css';

export default class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      office: "",
      home: "",
      shopping: "",
      lunch: "",
    };
  }

  fn_updateoffice = (argu1, argu2, argu3, argu4) => {
    this.setState({
      office: argu1,
      home: argu2,
      shopping: argu3,
      lunch: argu4,
    });
  };

  render() {
    return (
      <div className="card">
        <div className="container">
          <button
            className="button"
            onClick={() => this.fn_updateoffice("Going to Office", "", "", "")}
          >
            Going to Office
          </button>
          <button
            className="button"
            onClick={() =>
              this.fn_updateoffice(this.state.office, "Going to Home", "", "")
            }
          >
            Going to Home
          </button>
          <button
            className="button"
            onClick={() =>
              this.fn_updateoffice(
                this.state.office,
                this.state.home,
                "Going for shopping",
                ""
              )
            }
          >
            Going for shopping
          </button>
          <button
            className="button"
            onClick={() =>
              this.fn_updateoffice(
                this.state.office,
                this.state.home,
                this.state.shopping,
                "Going to Lunch"
              )
            }
          >
            Going for Lunch
          </button>
        </div>
        <div>
          <h5>I am {this.state.office}</h5>
          <h5>I am {this.state.home}</h5>
          <h5>I am {this.state.shopping}</h5>
          <h5>I am {this.state.lunch}</h5>
        </div>
      </div>
    );
  }
}