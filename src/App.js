import "./App.css";
import ListItem from "./components/listItem";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";


function App() {
  
  // const ref = useRef(null);

  // const useOnScreen = (ref, rootMargin = "0px") => {
  //   const [isVisible, setIsVisible] = useState(false);

  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         setIsVisible(entry.isIntersecting);
  //       },
  //       {
  //         rootMargin,
  //       }
  //     );

  //     const currentElement = ref?.current;

  //     if (currentElement) {
  //       observer.observe(currentElement);
  //     }

  //     return () => {
  //       observer.unobserve(currentElement)
  //     }
      
  //   }, []);

  //   return isVisible;
  // };

  // const isVisible = useOnScreen(ref, "-20px");
  // console.log("isVisible", isVisible)
  return (

    <div><ListItem/></div>
    // <Wrapper ref = {ref}>
    //  <div style={{height:"100vh"}}>hi</div>
    //  <Image isVisible = {isVisible} src="https://images.ctfassets.net/ooa29xqb8tix/3PHS4tm6Xw2BEZ1WWIjwnk/24fa4d723fb257dcf480b2e487afef42/React_Hooks_handbook_200x150_cover_new.svg"
    //  />
    // </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 0 auto;
  
  height: 500px;
`;

const Image = styled.img`
  transition: 3s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: ${(props) => props.isVisible ? "static" : "none" };
  animation: ${(props) => {
    console.log("props", props)
    return props.isVisible && "scale 5ms 1"}};

  @keyframes scale {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
  }
`;
export default App;
