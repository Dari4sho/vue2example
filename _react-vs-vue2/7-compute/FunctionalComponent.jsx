import React, { useMemo } from 'react';

const DisplayName = ({ firstName, lastName }) => {
  const displayName = useMemo(() => {
    return `${firstName} ${lastName}`;
  }, [firstName, lastName]);

  return <div>{displayName}</div>;
}


// <DisplayName firstName="Hello" lastName="World" />