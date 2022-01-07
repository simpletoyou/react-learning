/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-01-07 10:17:22
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-01-07 10:17:23
 */
import React from "react";

export default class FormDemo extends React.Component {

  constructor() {
    super();
    this.state = {
      value: ''
    }
  }
  handelChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  toSubmit = (e) => {
    // 表单提交后默认刷新页面，阻止当默认事件
    e.preventDefault()
    console.log(this.state.value)
  }
  render() {
    return (
      <div>

        <form action="" onSubmit={this.toSubmit}>
          <input type="text" value={this.state.value} onChange={this.handelChange} />
          <input type="submit" value="提交" />
        </form>

      </div>
    )
  }
}