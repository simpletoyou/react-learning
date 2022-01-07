import React from 'react'

export default class componentLife extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 10
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    // true  周期继续往下执行，触发数据修改，会执行 componentWillUpdate 进而执行 componentDidUpdate
    // false 不往下执行 数据不被修改
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  changeHandle = () => {
    this.setState({
      count: this.state.count += 1
    })
  }
  // 子组件调用父组件方法，可以传参
  subChangeTitle = () => {
    this.props.subTitle('子标题')
  }

  render() {
    // es6解构赋值
    const { count } = this.state
    const { title } = this.props
    return (
      <div>
        <p>This is component life: {count} -- {title}</p>
        <button onClick={this.changeHandle}>修改</button>

        <button onClick={this.subChangeTitle}>从子页面修改title</button>

      </div>
    )
  }
}