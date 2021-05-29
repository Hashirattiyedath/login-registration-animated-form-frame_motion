import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import SignUp from "./signUpForm";

const BoxContainer = styled.div`
  width: 95%;
  max-width: 300px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 1px 1px 15px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.8em;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  top: -290px;
  left: -70px;
  width: 160%;
  height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
  transform: rotate(60deg);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 1.5em;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backDropVariants = {
  expanded: {
    width: "233%",
    height: "1000px",
    borderRadius: "20%",
    transform: "rotate(50deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const { expanded, collapsed } = backDropVariants;

// start component
const AccountBox = () => {
  const [isExapanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExapandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, 1000);
  };

  const switchToSignup = () => {
    playExapandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 1000);
  };

  const switchToSignin = () => {
    playExapandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 1000);
  };

  // add these 2 functions in one variable that variable pass in provider value
  //2 functioneyum object formatil oru variable'il assign cheythu
  const contextValue = { 
    switchToSignup, 
    switchToSignin 
  };
  //== OR
  // array aayittum assign cheyyam
  // const contextValue =  [switchToSignup, switchToSignin];

  return (
    <>
      <AccountContext.Provider value={contextValue}>
        <BoxContainer>
          <TopContainer>
            <BackDrop
              initial={false}
              transition={expandingTransition}
              animate={isExapanded ? expanded : collapsed}
              variants={backDropVariants}
            />

            {active === "signin" && (
              <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please Login to continue</SmallText>
              </HeaderContainer>
            )}

            {active === "signup" && (
              <HeaderContainer>
                <HeaderText>Create</HeaderText>
                <HeaderText>An Account</HeaderText>
                <SmallText>Please Sign Up</SmallText>
              </HeaderContainer>
            )}
          </TopContainer>
          <BottomContainer>
            {active === "signin" && <LoginForm />}
            {active === "signup" && <SignUp />}
          </BottomContainer>
        </BoxContainer>
      </AccountContext.Provider>
    </>
  );
};

export default AccountBox;
