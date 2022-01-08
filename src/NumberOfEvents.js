import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    EventsTotal: 32,
  };

  handleInputChanged = (event) => {
    const number = event.target.value;

    this.setState({
      EventsTotal: number,
    });

    this.props.updateTotal(number);
    console.log(number);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p>Number of Events Shown</p>
        <input
          value={this.props.numberOfEvents}
          className="newEventsTotal"
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
