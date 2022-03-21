import React from 'react';

class MyReactComponent extends React.Component {
  static getDerivedStateFromProps(props, state) {}
  componentDidMount() {}
  shouldComponentUpdate(nextProps, nextState) {}
  getSnapshotBeforeUpdate(prevProps, prevState) {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  render() {
    return <div>Hello World</div>;
  }
}