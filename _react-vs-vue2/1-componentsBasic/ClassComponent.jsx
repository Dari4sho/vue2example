import React from 'react';

const textStyles = {
  textDecoration: 'underline',
}

class MyReactComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <p style={textStyles}>Nice text, bro</p>
      </div>
    );
  }
}