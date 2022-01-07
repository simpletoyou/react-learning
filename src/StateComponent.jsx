import React from "react";

export default class StateComponent extends React.Component {

  // 组件中状态 state
  // 以前操作页面元素变化,需要操作DOM 修改DOM
  // 使用React框架,页面元素的改变使用State进行处理

  constructor(props) {
    super(props)
    // 定义state
    this.state = {
      count: 10,
      flag: true
    }
  }

  // 使用es6箭头函数,添加函数时不用做this绑定

  increment() {
    this.setState({
      count: this.state.count += 1
    })
  }
  decrement=()=> {
    console.log('this',this)
    this.setState({
      count: this.state.count -= 1
    })
  }

  chickHandle=()=>{
    console.log('this',this)
  }
  changeFlag=()=>{
    this.setState({
      flag: !this.state.flag
    })
  }



  render() {
    let showView = this.state.flag?'This is true':'This is false'
    return (
      <div>
        <h3>This is State</h3>
        <p>{showView}</p>
        <p>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}>增加</button>
        <button onClick={this.decrement}>减少</button>
        <button onClick={this.chickHandle}>关于This</button>
        <button onClick={this.changeFlag}>Change</button>
      </div>
    )
  }
}