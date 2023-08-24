"use client";

import React from "react";

export function TestClient() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      Test client
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}
