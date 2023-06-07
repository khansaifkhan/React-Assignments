import React, { PureComponent } from "react";

export default class MyPureComponent extends PureComponent {
  render() {
    return (
      <div className="text">
        <h3>Pure Component Count : {this.props.count}</h3>
      </div>
    );
  }
}
