import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import { Panel, Message, Counter, Calculator } from './Sample';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App2 />
//   </React.StrictMode>,
//   document.getElementById('app2')
// );

// 2つとも描画することもできる
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <App2 />
//   </React.StrictMode>,
//   document.getElementById('app2')
// );


// わからないこと： Messageにどうやって引数を渡すか

ReactDOM.render(
  <React.StrictMode>
    <Panel />
    <Message />
    <Counter />
    <Calculator />
  </React.StrictMode>,
  document.getElementById('app2')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
