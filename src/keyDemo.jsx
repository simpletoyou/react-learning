import React from "react";

export default class KeyDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [{
        name: 'English',
        num: 1,
        grade: [33,444,6666]
      }, {
        name: 'Chinese',
        num: 2,
        grade: [33,444,6666]
      }, {
        name: 'Math',
        num: 3,
        grade: [33,444,6666]
      }]
    }
  }


  addData=()=>{
    let data = {
      name: 'Music',
      num: 20,
      grade: [66,666,6666]
    }
    this.setState({
      list: [data,...this.state.list]
    })
  }
  render() {

    let { list } = this.state
    return (
      <div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={index}>
                  <span>{item.name}------------</span>
                  <span>{item.num}</span>
                  <div>
                    {
                      item.grade.map((e,idx)=>{
                        return <span key={idx}>{e}===</span>
                      })
                    }
                  </div>
                </li>
              )
            })
          }
        </ul>
        <button onClick={this.addData}>添加数据 </button>
      </div>
    )
  }
}