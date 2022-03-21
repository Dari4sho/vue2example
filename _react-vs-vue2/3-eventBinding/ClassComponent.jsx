import React from 'react';

class MyReactComponent extends React.Component {
  save = () => {
    console.log("save");
  };

  render() {
    return <button onClick={this.save}>Save</button>;
  }
}