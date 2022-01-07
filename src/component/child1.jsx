import React from "react";

export default class Child1 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {this.props.money}
      </div>
    )
  }
}