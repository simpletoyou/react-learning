import React from "react";

export default class IfDemo extends React.Component {

  // 常用的应用场景
  // 1. 对视图条件进行切换
  // 2. 做缺省值

  constructor() {
    super();
    this.state = {
      isLogin: false,
      names: ['Ahriy', 'Jarna']
    }
  }


  toLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }
  render() {

    const { names } = this.state

    let showView = this.state.isLogin ? <div>Hello, Ahriy</div> : <div>请登录</div>
    return (
      <div>
        <p>条件渲染</p>
        <p>{showView}</p>
        {/* 这里是条件渲染 */}
        <button onClick={this.toLogin}>{this.state.isLogin ? 'Logout' : 'Login'}</button>
        {/* 这里是做缺省值渲染 */}
        {
          names.length ? <div>
            {
              names.map((item, index) => {
                return <p key={index}>{item}</p>
              })
            }
          </div> : <div>正在请求数据...</div>
        }


      </div>
    )
  }
}