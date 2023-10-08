import React, { useState, useMemo } from 'react';
import './Home.css';

function Home() {
  const [count, setCount] = useState(0);

  const memoizedCount = useMemo(() => {
    console.log('Calculating memoized count');
    return count * 2;
  }, [count]);

  return (
    <div className="home">
      <h1 className="home-title">Home Page</h1>
      <p>Count: {count}</p>
      <p>Memoized Count: {memoizedCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default Home;