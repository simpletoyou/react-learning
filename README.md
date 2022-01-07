<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-01-04 09:14:13
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-01-07 15:50:47
-->
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
### `npm run build`


## push返回的是数组长度
[1,2,3,4].push(100)
console.log: 5

## 前期知识准备
    1. JS
    2. HTML+CSS
    3. 构建工具：Webpack(https://yunp.top/init/p/v/1)
    4. NODE NPM(https://yunp.top/init/p/v/1)
    5. cnpm
    6. 官方文档

## 创建React项目
    npx react-creact-app demo
    cd demo
    npm start


## 环境介绍
    node_modules
    public 入口文件
    src 源码


## React基础知识
### JSX语法
  JS+XML语法（HTML）
  解读JSX语法： 遇到<>按照html解析，遇到{}按照JS解析
  
### 元素渲染

### 组件
组件文件名称后缀可以是js，也可以是jsx
jsx文件有react语法提示
一个React项目是由很多很多个组件组成的

### props属性
组件复用性很重要
组件pascalCase命名（大驼峰命名）


### 事件处理
1. this问题
2. 向事件处理程序传递函数

### state

### React生命周期函数
函数列表：
    componentWillMount：组件渲染之前执行
    --> render -->
    componentDidMount： 组件渲染之后执行（页面呈现）
    shouldComponentUpdate: （state change）返回true、false，true代表允许改变，否则不允许
        componentWillUpdate： 数据在改变之前执行（state，props）
        componentDidUpdate： 数据修改完成（state，props）
    componentWillReceiveProps： props发生改变之前
    componentWillUnmount: 组件卸载前执行
子传父！！！！！！
父传子！！！！！！

### setState 更新是同步还是异步
1. setState 会引起视图的重绘
2. 在可控情况下是异步，非可控情况下是同步

### 条件渲染


### 列表
测试接口地址 ：http://iwenwiki.com/api


### 表单
1. 受控组件
    有时候使用受控组件会很麻烦，因为需要为数据变价的每种方式都编写事件处理函数，并通过一个React组件传递所有的输入State。
    当你将之前的代码转换为React或将React应用程序与非React库集成时，这可能会令人厌烦。
    在这些情况下，使用非受控组件会方便得多，这是实现输入表单的另一种方式。
2. 非受控组件
    Refs and the DOM

### Refs and the DOM
1. 管理焦点，文本选择或媒体播放
2. 触发强制动画
3. 集成第三方DOM库

React.createRef()创建ref，并在指定节点上ref={}进行指定，当ref传递给render中的元素时，对该节点的引用可以在ref的current属性中被访问（componentDidMount()后可以获取到）


### 状态提升
组件之间的数据交互 

### 组合 VS 继承
this.props.children

### 使用PropTypes进行类型检查
增强程序的健壮性