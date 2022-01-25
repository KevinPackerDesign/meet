import React, { Component } from "react";
import { ErrorAlert } from "./Alert";
import "./NumberOfEvents.css";

class NumberOfEvents extends Component {
  state = {
    EventsTotal: 32,
    errorText: "",
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number < 1 || number > 32) {
      this.setState({
        EventsTotal: 1,
        errorText: "Please pick a number between 1 and 32",
      });
    } else {
      this.setState({
        EventsTotal: number,
        errorText: "",
      });
    }

    this.props.updateTotal(number);
    console.log(number);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p className="numbertext">Number of Events Shown</p>
        <input
          value={this.props.numberOfEvents}
          className="newEventsTotal"
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
