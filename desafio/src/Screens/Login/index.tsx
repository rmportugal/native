import React from "react";
import {
  HeaderContainer,
  ImageHeader,
  LoginContainer,
  TextLogin,
  WhiteButton,
  OrText,
  TextButton,
  ButtonImage,
  SignUpText,
  SignUpContainer,
  ButtonHeader,
  } from "./styles";
import Logo from "../../../assets/Pictures/Logoazul.png";
import Google from "../../../assets/Pictures/Google.png";
import { StatusBar } from "react-native";
import Back from "../../../assets/Pictures/backwhite.png";

const Login = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <HeaderContainer>
        <ButtonHeader source={Back} />
        <ImageHeader source={Logo} />
      </HeaderContainer>
      <LoginContainer>
        <TextLogin> Welcome back! Log in to see the latest.</TextLogin>

        <WhiteButton>
          <ButtonImage source={Google} />
          <TextButton>Continue with Google</TextButton>
        </WhiteButton>

        <OrText>
           or
        </OrText>   

        <WhiteButton>
          <TextButton>Log in</TextButton>
        </WhiteButton>
      </LoginContainer>

      <SignUpContainer>
        <SignUpText>Don't have an account? Sign up</SignUpText>
      </SignUpContainer>
    </>
  );
};

export default Login;
