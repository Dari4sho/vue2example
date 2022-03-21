import React from 'react';

const MyReactComponent = () => {
  const save = () => {
    console.log("save");
  };

  return <button onClick={save}>Save</button>;
}