import React from "react";

export default class RefsForm extends React.Component {

  // 非受控组件代码演示

  constructor() {
    super();
    this.username = React.createRef()
    this.password = React.createRef()
  }

  toSubmit = () => {
    console.log(this.username.current.value)
    console.log(this.password.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.username}/>
        <input type="password" ref={this.password}/>
        <button onClick={this.toSubmit}>提交</button>
      </div>
    )
  }
}