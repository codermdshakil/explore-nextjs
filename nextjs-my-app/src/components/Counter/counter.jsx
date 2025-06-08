
"use client"

import { useState } from "react";

const CounterPage = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>Count : {count}</h3>
      <button className="p-2 border-2 border-blue-600" onClick={() => setCount(count + 1)} >Increase</button>
      <button className="p-2 border-2 border-blue-600" onClick={() => setCount(count - 1)} >Decrease</button>
    </div>
  );
};

export default CounterPage;