import React, { useState } from "react";

function App() {
  const [item, setItoem] = useState(1);
  const incrementItem = () => setItoem(item + 1);
  const decrementItem = () => setItoem(item - 1);
  return (
    <div>
      <h1>{item}</h1>
      <button onClick={incrementItem}>+</button>
      <button onClick={decrementItem}>-</button>
    </div>
  );
}

export default App;
