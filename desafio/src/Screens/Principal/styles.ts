import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #15202b;
  padding-top: 20px;
`;

export const HeaderPrincipal = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #15202b;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 8px;
`;

export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-right:20%
  margin-left:20%
;`;
export const TitleText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const Divider = styled.View`
  height: 1px;
  opacity: 0.6;
  background-color: #38444d;
  margin-bottom: 20px;
`;

export const LogoImage = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 45%;
`;

