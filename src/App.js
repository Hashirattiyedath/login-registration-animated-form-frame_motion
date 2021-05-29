import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AccountBox from "./component/accountBox";

const AppContainer = styled.div `
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return(
    <>
      <AppContainer>
          <AccountBox />
      </AppContainer>
    </>
  )
};

export default App;
