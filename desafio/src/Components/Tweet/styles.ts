import styled from "styled-components/native";

export const TweetContainer = styled.View`
  flex-direction: column;
  margin-bottom: 10px;
`;

export const TextCointainer = styled.View`
  flex-direction: row;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 15%;
  margin-right: 10%;
`;
export const TweetTextStyle = styled.Text`
justify-content:flex-end
  color: #fff;
  font-size: 18px;
  margin-left: 50px;
  margin-right: 20px;
  margin-bottom:15px
`;

export const TimeText = styled.Text`
color:#ffffff;
opacity:0.5;
margin-left: 5px
font-size: 14px;
;`;

export const UsernameText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
export const UserInfo = styled.View`
  flex-direction: row;
`;

export const ArrobaText = styled.Text`
color:#ffffff;
opacity:0.5;
margin-left: 5px
font-size: 14px;

;`;

export const UserName = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  opacity:0.5
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 8px;
`;

export const ButtonText = styled.Text`
color:#ffffff;
opacity:0.5;
margin-left: 5px
font-size: 14px;
;`;
