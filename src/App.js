import React from "react";
import useTitle from "./function/useEffect/useTitle/index"
import useClick from "./function/useEffect/useClick/index"
import useInput from "./function/useInput/index"
import useTab from "./function/useTabs/index"
import useConfirm from "./function/useConfirm/index";
import usePreventLeave from "./function/usePreventLeave/index" 
import useBeforeLeave from "./function/useBeforeLeave";
import useFadeIn from "./function/useFadeIn/index"
import useNetwork from "./function/useNetwork/index";

const content = [
  {
    tab: "Section1",
    content: "주제1",
    image: "https://cdn.pixabay.com/photo/2016/09/29/10/08/halloween-1702531_960_720.jpg"
  },
  {
    tab: "Section2",
    content: "주제2",
    image:"https://cdn.pixabay.com/photo/2019/10/13/14/33/flowesr-4546245_1280.jpg"
  }
];
const App =() => {
  //confirm
  const deletWord = () => console.log("삭제")
  const protectWord = () => console.log("ss")
  const confirmDelet = useConfirm("ok?", deletWord, protectWord)

  const {enablePrevent , disablePrevent} = usePreventLeave();
  //Title
  const titleUpdate = useTitle("Loading");
  setTimeout(() => titleUpdate("HOME"), 5000)
  //Click
  const clicked = () => {
    alert("안녕하세요")
    document.getElementById("demo").innerHTML = "눌러짐";
  }
  const clickUpdate = useClick(clicked);
  //tab
  const {currentItem, changeItem} = useTab(0,content);
  //input
  const maxLen = value => value.length < 10 
  const noAt = value => !value.includes("@");
  const name = useInput("",maxLen,noAt) //길이먼저써야함
  //leavemouse
  const beforLeave = () => {
    console.log("leave mouse")
  }
  useBeforeLeave(beforLeave)
  //fadein
  const fadeIn = useFadeIn(5,3)//3초뒤에 5초동안 실행
  //network
  const onLine = useNetwork();

  return (
    <div>
      <div>
        <h1>{onLine ? "OnLine":"OffLine"}</h1>
        <h1 {...fadeIn}> ㅎㅇ </h1>
      </div>
    <div>
      <input placeholder="Hello" {...name} />
      <h1 id="demo" ref={ clickUpdate }>i want Click for you</h1>
      <button onClick={confirmDelet}>delet all</button>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>

    <div>
      {content.map((section,index) =>(<button onClick={()=> changeItem(index)} >{section.tab}</button>))}
      <div>{currentItem.content}</div>
      <img alt="1" src={currentItem.image} width="200" height="200"/>
      
    </div>

    </div>
  
  );
}

export default App;
