import styled from "styled-components";

import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <SiteWrapper>
      <Header />
      <Content />
    </SiteWrapper>
  );
}

export default App;

const SiteWrapper = styled.section`
  width: 90%;
  margin: 2rem auto;
`;
