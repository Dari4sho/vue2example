import React, { useState, useEffect } from 'react';

const MyReactComponent = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((currentCount) => currentCount + 1);
  };

  useEffect(() => {
    localStorage.setItem("my_count", newCount);
  }, [count]);

  return (
    <div>
      <span>{count}</span>
      <button onClick={increaseCount}>Add</button>
    </div>
  );
}