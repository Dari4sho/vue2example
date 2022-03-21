import React from 'react';

const MyReactComponent = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}: {item.desc}
        </li>
      ))}
    </ul>
  );
}