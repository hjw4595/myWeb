import { useRef, useEffect } from "react";

export const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick === "function") {
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
    }
    return () => {
      if (element.current) {
        // eslint-disable-next-line
        element.current.removeEventListener("click", onClick);
      }
    };
    // eslint-disable-next-line
  },[]);
  return element; 
};
