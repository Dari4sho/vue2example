import React from 'react';

const MyReactComponent = () => {
  return <div dangerouslySetInnerHTML={{ __html: "<pre>...</pre>" }} />;
}