import React from "react";

export default class SetStateDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  async increment() {
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {

    //   console.log('this.statte.count', this.state.count)
    // })
    // 在这里的输出与页面上数据相差1，输出的是上一次的值而非页面上的值，故为异步
    // console.log('this.statte.count', this.state.count)
    // 可以在this.state写第二个参数，为函数，写成箭头函数形式，在这里输出的数据与页面数据一直，在这里保持同步

    // 写成同步形式
    await this.setStateAsync({ count: this.state.count + 1 })
    console.log('this.state.count', this.state.count)

  }

  // Promise
  // async await


  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    })
  }


  render() {
    return (
      <div>
        <div>setState是同步还是异步</div>
        <p>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}> 修改</button>
      </div>
    )
  }
}