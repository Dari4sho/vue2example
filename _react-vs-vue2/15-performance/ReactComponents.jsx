import React from 'react';

// PureComponent
class MyReactComponent extends React.PureComponent {
/* ... */
}

// shouldComponentUpdate
class MyReactComponent2 extends React.Component {
  shouldComponentUpdate(nextProps) { /* ... */ }
  /* ... */
}

// React.memo
const MyReactComponent3 = () => React.memo(
  MyReactComponent,
  (prevProps, nextProps) => {
  /* ... */
  }
);


// useMemo
const MyReactComponent4 = () => {
  return React.useMemo(() => {
    return <div>...</div>;
  }, []);
}

// useCallback
const MyReactComponent5 = ({ item, handleDelete }) => {
  const handleClick = React.useCallback(() => handleDelete(item), [
    item,
    handleDelete,
  ]);

  return <button onClick={handleClick}>{item.name}</button>;
}