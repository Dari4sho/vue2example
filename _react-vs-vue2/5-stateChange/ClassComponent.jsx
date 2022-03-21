import React from 'react';

class MyReactComponent extends React.Component {
  state = {
    count: 0,
  };

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
    // get current state before update to make sure we didn't use the stale value
    // this.setState(currentState => ({ count: currentState.count + 1 }));
  };

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.increaseCount}>Add</button>
      </div>
    );
  }
}