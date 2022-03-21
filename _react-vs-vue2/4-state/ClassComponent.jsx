import React from 'react';

class MyReactComponent extends React.Component {
  state = {
    name: 'world',
  }
  render() {
    return <h1>Hello { this.state.name }</h1>;
  }
}