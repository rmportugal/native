import styled from "styled-components/native";

export const LoginContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #15202b;
`;

export const HeaderContainer = styled.View`
flex:.1
flex-direction:row
justify-content: flex-start;
align-items: center;
background-color:#15202B;
;`;

export const ImageHeader = styled.Image`
  width: 35px;
  height: 25px;
  margin-left:35%
  margin-top:5%
`;

export const ButtonHeader = styled.Image`
width: 35px;
height: 25px;
margin-left:1%
margin-top:5%
;`;

export const TextLogin = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin: 20px;
  padding-left:10px
  padding-right:10px;
  color: #ffffff;
`;

export const WhiteButton = styled.TouchableOpacity`
flex-direction:row
  justify-content:center;
  background-color: #ffffff;
  border-radius: 50px;
  padding: 10px 20px;
  width:300px
  height:40px;
`;

export const ButtonImage = styled.Image`
  margin-right:10px
  width:30px
  height:25px
;`;

export const TextButton = styled.Text`
  align-self:center
  color: #0e0e10;
  font-size: 14px;
  font-weight: bold;
;}`;

export const OrText = styled.Text`
  color: #0e0e10;
  font-size: 16px;
  text-align: center;
  margin: 5px;
`;

export const SignUpContainer = styled.View`
  background-color: #15202b;
`;
export const SignUpText = styled.Text`
  justify-content: flex-end
  align-self: flex-start
  font-size: 14px;
  color: #ffffff;
  margin:30px
  text-align: center;
;`;