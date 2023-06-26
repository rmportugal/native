import styled from "styled-components/native";

export const FooterContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: #15202b;
`;

export const FooterButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
export const Divider = styled.View`
  height: 1px;
  opacity: 0.9;
  background-color: #15202b;
`;
export const ButtonView = styled.View`
  position: absolute;
  bottom: 0;
  align-self: flex-end;
  margin-bottom: 10%;
`;

export const AddButton = styled.TouchableOpacity`
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #1da1f2;
  border-radius: 30px;
`;
