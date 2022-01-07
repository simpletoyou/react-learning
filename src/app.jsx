import React from "react";
// import Home from './Home'
// import MyNav from "./MyNav";
// import StateComponent from "./StateComponent";
// import ComponentLife from "./ComponentLife"
// import SetStateDemo from './setStateDemo'
// import IfDemo from './ifDemo'
// import KeyDemo from './keyDemo'
// import FormDemo from "./FormDemo";
// import RefsAndDom from "./RefsAndDom";
// import RefsForm from "./RefsForm";
// import Parent from "./component/parent";
// import Compose from "./compose";
import PropsTypeDemo from "./PropsTypeDemo";

// 用类的形式创建组件，还有一种是hook形式

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '新年快乐'
    }
  }
  changeTitle = () => {
    this.setState({
      title: '虎虎生威'
    })
  }

  subChangeTitle = (data) => {
    this.setState({
      title: data
    })
  }
  render() {

    // const nav1 = ["首页","学习","视频"];
    // const nav2 = ["Web","Node","JS"];
    return (
      <div>
        {/* <MyNav nav={nav1} title="路径导航"/>
        <MyNav nav={nav2} title="学习导航"/> */}
        {/* <Home /> */}
        {/* <StateComponent /> */}
        {/* <ComponentLife title={this.state.title}  subTitle={this.subChangeTitle}/>
        <button onClick={this.changeTitle}>主页面修改title</button> */}
        {/* <SetStateDemo /> */}
        {/* <IfDemo /> */}
        {/* <KeyDemo /> */}
        {/* <FormDemo /> */}
        {/* <RefsAndDom /> */}
        {/* <RefsForm /> */}
        {/* <Parent /> */}
        {/* <Compose>
          <div>我是组合效果</div>
        </Compose> */}
        <PropsTypeDemo title="Ahriy"/>
      </div>
    )
  }
}

export default App;
