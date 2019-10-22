import React from "react";
import useInput from "./function/useInput/index"
import useTab from "./function/useTabs/index"

const content = [
  {
    tab: "Section1",
    content: "Section1"
  },
  {
    tab: "Section2",
    content: "Section2"
  }
];
const App =() => {
  const {currentItem, changeItem} = useTab(0,content);
  const maxLen = value => value.length < 10 
  const noAt = value => !value.includes("@");
  const name = useInput("",maxLen,noAt) //길이먼저써야함

  return (
    <div>
    <div>
      <input placeholder="Hello" {...name} />
    </div>
    <div>
      {content.map((section,index) =>(<button onClick={()=> changeItem(index)} >{section.tab}</button>))}
      <div>{currentItem.content}</div>
    </div>
    </div>
  
  );
}

export default App;
