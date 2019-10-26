import React from "react";
import useTitle from "./function/useEffect/useTitle/index"
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
  const titleUpdate = useTitle("Loading");
  setTimeout(() => titleUpdate("HOME"), 5000)
  //tab
  const {currentItem, changeItem} = useTab(0,content);
  //input
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
