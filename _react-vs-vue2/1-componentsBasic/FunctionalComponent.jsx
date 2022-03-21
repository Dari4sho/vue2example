import React from 'react';
import styled from 'styled-components';

const NiceText = styled.p`
  text-decoration: underline;
`;

const MyReactComponent = () => {
  return (
  <div>
    <h1>Hello world</h1>
    <NiceText>Nice text, bro</NiceText>
  </div>
  );
}