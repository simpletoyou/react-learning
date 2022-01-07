/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-01-04 09:14:13
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-01-05 08:59:24
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello react</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   ReactDOM.render(
//     element,
//   document.getElementById('root')
// );
// }

// setInterval(tick,1000)

ReactDOM.render(
  <App />,
  document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
