import React from "react";
import styled from "styled-components";
import MyImage, { AssetType } from "./views/Figure";
import MainRouter from "./routes/MainRouter";
import { EXTRA_SMALL_DEVICES } from "./layout/Mobile";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Header = styled.header`
  margin-top: 2em;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${EXTRA_SMALL_DEVICES`
      margin-top: 1em;
   `};
`;
const Logo = styled(MyImage)`
  max-width: 100%;
  height: auto;
  width: 240px;

  ${EXTRA_SMALL_DEVICES`
    width: 140px;
   `};
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo
          source={"https://files.axelra.com/logo.png"}
          assetType={AssetType.URL}
        />
      </Header>
      <MainRouter />
    </Container>
  );
};

export default App;
