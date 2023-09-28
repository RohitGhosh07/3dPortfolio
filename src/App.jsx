import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import { StyleSheetManager } from 'styled-components';

// Define a function to filter props
const shouldForwardProp = (prop) => !prop.startsWith('$');
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Container>
        <Hero />
        <Who />
        <Works />
        <Contact />
      </Container>
    </StyleSheetManager>
  );
}

export default App;