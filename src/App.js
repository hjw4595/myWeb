import React, { useState } from "react";

const useInput = (initialValue,validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };  
  return { value, onChange };
};
const App =() => {
  const maxLen = value => value.length < 10 
  const noAt = value => !value.includes("@");
  const name = useInput("",maxLen,noAt)

  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div>
      <input placeholder="Hello" {...name} />
      <h1>{item}</h1>
      <button onClick={incrementItem}>+</button>
      <button onClick={decrementItem}>-</button>
    </div>
  );
}

export default App;
