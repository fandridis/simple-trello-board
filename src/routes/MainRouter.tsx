import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AxelraTrello from "../components/AxelraTrello";
import { CHALLENGE } from "./Routes";

const Container = styled.div``;

const RoutesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainRouter = () => {
  return (
    <Container>
      <Router>
        {/* <NavigationTabs />*/}
        <RoutesContainer>
          <Switch>
            <Route
              component={AxelraTrello}
              path={CHALLENGE}
              exact
            />

            {/*Intentionally left at the bottom*/}
            <Route
              exact
              path={"/*"}
              render={() => {
                return <Redirect to={CHALLENGE} />;
              }}
            />
          </Switch>
        </RoutesContainer>
      </Router>
    </Container>
  );
};

export default MainRouter;
