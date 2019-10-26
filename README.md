react hook
hooks = react의 state에 연결하는 방법 => class를 사용하지 않고 함수형 프로그래밍 가능

1.useState 
2.useInput
3.useTabs(err)
export const useTabs = (initialTab, allTabs) => {

    if (!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab); <<이부분의 useState
    return { 
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
  };

  React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?
  if문 끝나고 들어가는데 왜 에러가 뜨는지 모르겠음 -> 문제의 부분을 if문 위로 올리면 됨