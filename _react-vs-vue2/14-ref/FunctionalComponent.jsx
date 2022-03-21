import React, { useEffect, useState, useRef } from 'react';

const AutofocusInput = () => {
  const [content, setContent] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <input
      ref={ref}
      type="text"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  );
}