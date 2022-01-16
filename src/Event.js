import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    if (this.state.collapsed === true) {
      this.setState({ collapsed: false });
    } else {
      this.setState({ collapsed: true });
    }
  };

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <div className="status">{event.status}</div>
        <div className="summary">{event.summary}</div>
        <div className="start">{event.start.dateTime}</div>
        <div className="end">{event.end.dateTime}</div>
        {this.state.collapsed === false && (
          <p className="description">{event.description}</p>
        )}
        {this.state.collapsed === true && (
          <button className="infoButton" onClick={this.handleClick}>
            More Info
          </button>
        )}
        {this.state.collapsed === false && (
          <button className="infoButton" onClick={this.handleClick}>
            Close Info
          </button>
        )}
      </div>
    );
  }
}
export default Event;
