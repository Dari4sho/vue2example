import React, { useState } from 'react';

const MyReactComponent = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={increaseCount}>Add</button>
    </div>
  );
}