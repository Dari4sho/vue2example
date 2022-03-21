import React, { useState } from 'react';

const MyReactComponent = () => {
  const [content, setContent] = useState("");

  return (
    <input
      type="text"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  );
}