import React, { useState } from 'react';

const MyReactComponent = () => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div>
      {isLoading && <span>Loading...</span>}
      {isLoading ? <div>is loading</div> : <div>is loaded</div>}
    </div>
  );
}