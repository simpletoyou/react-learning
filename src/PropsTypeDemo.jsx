import React from "react";
import PropTypes from "prop-types"
export default class PropsTypeDemo extends React.Component {
  render() {
    return (
      <div>
        Hello: {this.props.title}
      </div>
    )
  }
}

PropsTypeDemo.propTypes = {
  // 添加isRequired表示必选
  title: PropTypes.string.isRequired
}

// 当页面没有传入title，设置默认值
PropsTypeDemo.defaultProps = {
  title: '默认值'
}