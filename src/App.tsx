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
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled(MyImage)`
  max-width: 100%;
  height: auto;
  width: 160px;

  ${EXTRA_SMALL_DEVICES`
    width: 100px;
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
