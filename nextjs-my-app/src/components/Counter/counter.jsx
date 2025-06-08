"use client";

import { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      <h3>Count : {count}</h3>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button className="btn btn-error" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
       
    </div>
  );
};

export default CounterPage;
