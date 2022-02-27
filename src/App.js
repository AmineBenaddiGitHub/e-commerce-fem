import styled from "styled-components";

import Header from "./Header";
import Content from "./Content";
import LightBox from "./LightBox";

function App() {
  return (
    <>
      <LightBox />
      <SiteWrapper>
        <Header />
        <Content />
      </SiteWrapper>
    </>
  );
}

export default App;

const SiteWrapper = styled.section`
  width: 90%;
  margin: 2rem auto;
`;
