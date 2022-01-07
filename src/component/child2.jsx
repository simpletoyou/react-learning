import React from "react";

export default class Child2 extends React.Component {
  constructor() {
    super()
    
  }
  render() {
    return (
      <div>
        {this.props.money * 7}
      </div>
    )
  }
}