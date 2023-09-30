import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const withLifecycleLogging = (WrappedComponent) => {
  class WithLifecycleLogging extends React.Component {
    componentDidMount() {
      console.log(`${WrappedComponent.name} mounted`);
    }

    componentDidUpdate() {
      console.log(`${WrappedComponent.name} updated`);
    }

    componentWillUnmount() {
      console.log(`${WrappedComponent.name} will unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLifecycleLogging;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const CounterWithLifecycleLogging = withLifecycleLogging(Counter);


function App() {
  return (
    <div>
      <CounterWithLifecycleLogging />
    </div>
  );
}

export default App;
