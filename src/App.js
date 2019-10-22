import React, { useState } from "react";

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    setValue(value);
  };  
  return { value, onChange };
};
const App =() => {
  const name = useInput("")
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div>
      <input placeholder="Hello" onChange={name.onChange} />
      <h1>{item}</h1>
      <button onClick={incrementItem}>+</button>
      <button onClick={decrementItem}>-</button>
    </div>
  );
}

export default App;
