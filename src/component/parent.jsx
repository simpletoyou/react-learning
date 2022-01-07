/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-01-07 14:22:14
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-01-07 14:41:03
 */
import React from "react";

import Child1 from './child1'
import Child2 from './child2'

export default class Parent extends React.Component {

  constructor() {
    super();
    this.state = {
      money: 1
    }
  }

  handleChange(e) {
    this.setState({
      money: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.money} onChange={this.handleChange.bind(this)} />
        <div>RMB: <Child1 money={this.state.money} /></div>
        <div>$: <Child2 money={this.state.money} /></div>
      </div>
    )
  }
}
