import React from 'react';
import PropTypes from 'prop-types';

const MyReactComponent = ({ name, mark }) =>
  <h1>Hello {name}{mark}</h1>

MyReactComponent.propTypes = {
  name: PropTypes.string.isRequired,
  mark: PropTypes.string,
}
MyReactComponent.defaultProps = {
  mark: '!',
}


// <MyReactComponent name="world">