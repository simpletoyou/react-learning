import React from "react";

// 父传子 props数据不能被修改
export default class MyNav extends React.Component {
  render() {
    const data = this.props
    return (
      <div>
        <h3>{data.title}</h3>
        <ul>
          {/* 列表渲染  */}
          {
            data.nav.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}