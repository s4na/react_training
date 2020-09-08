// import React from 'react';
import React, { useState, useMemo } from 'react';

class Panel extends React.Component {
  render() { return <div>Hi</div> }

  // コンポーネントを再レンダリングすべきか否かを制御できる
  shouldComponentUpdate(nextProp, nextState) {
    return false;
  }
};

const Message = (props) => {
  return <div>{props.content}</div>
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return <div onClick={() => setCount(count+1)}>{count}</div>
};

const expensiveFunc = () => {
  return 1 + 1
}

const Calculator = () => {
  const calcResult = useMemo(() => expensiveFunc(), []);

  return <div>{calcResult}</div>
};

export { Panel, Message, Counter, Calculator };
