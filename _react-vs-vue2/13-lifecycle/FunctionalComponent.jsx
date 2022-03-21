import React, { useEffect, useLayoutEffect } from 'react';

const MyReactComponent = () => {
  // componentDidMount
  useEffect(() => {}, []);


  // componentDidUpdate + componentDidMount
  useEffect(() => {});

  // componentWillUnmount
  useEffect(() => {
    return () => { /* ... */ }
  }, []);

  // runs synchronously after a render but before the screen is updated
  useLayoutEffect(() => {}, []);

  return <div>Hello World</div>;
}