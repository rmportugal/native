import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Text } from 'react-native';
import User from '../../../assets/Pictures/User.png'
import { ProfileImage, UserInfo, Button, TweetContainer, TextCointainer, ButtonContainer, UsernameText, ArrobaText, TweetTextStyle, TimeText, ButtonText } from './styles'

interface TweetProps {
    UserName: string;
    Arroba: string;
    TweetText: string;
    Time: string;
    TextButtom: string;
}

const Tweet = ({ UserName, Arroba, TweetText, Time, TextButtom }: TweetProps) => {
    return (
        <TweetContainer>
            <UserInfo>
                <ProfileImage source={User} />
                <UsernameText>{UserName}</UsernameText>
                <ArrobaText>{Arroba}</ArrobaText>
                <TimeText>{Time}</TimeText>
            </UserInfo>
            <TextCointainer>
                <TweetTextStyle>{TweetText}</TweetTextStyle>
            </TextCointainer>
            <ButtonContainer>
                <Button>
                    <Feather name="message-circle" size={15} color="white" />
                    <ButtonText>{TextButtom}</ButtonText>
                </Button>
                <Button>
                    <Feather name="repeat" size={15} color="white" />
                    <ButtonText>{TextButtom}</ButtonText>
                </Button>
                <Button>
                    <Feather name="heart" size={15} color="white" />
                    <ButtonText>{TextButtom}</ButtonText>

                </Button>
                <Button>
                    <Feather name="bar-chart-2" size={15} color="white" />
                    <ButtonText>{TextButtom}</ButtonText>

                </Button>
                <Button>
                    <Feather name="share-2" size={15} color="white" />

                </Button>
            </ButtonContainer>
        </TweetContainer>
    )
}

export default Tweet;