import React, { Component } from "react";

export class Loader extends Component {
  render() {
    return (
      <div className={`loader_container${this.props.status ? ' active__loader' : ''}`}>
        <div className="loader">
        </div>
      </div>
    );
  }
}

export default Loader;
