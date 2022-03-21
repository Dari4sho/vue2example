import React, { useState } from 'react';

const MyReactComponent = () => {
  const [name, setName] = useState("world");

  return <h1>Hello {name}</h1>;
}