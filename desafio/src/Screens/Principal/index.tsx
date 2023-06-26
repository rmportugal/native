import React from 'react'
import { Container, HeaderPrincipal, ProfileImage, Divider, LogoImage, Title, TitleText } from './styles'
import User from '../../../assets/Pictures/User.png'
import Logo from '../../../assets/Pictures/Logoazul.png'
import { StatusBar, ScrollView } from 'react-native';
import Tweet from '../../Components/Tweet';
import Footer from '../../Components/Footer';


const Principal = () => {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                translucent={true}
                backgroundColor="transparent"
            />
            <ScrollView>
                <Container>
                    <HeaderPrincipal>
                        <ProfileImage source={User} />
                        <LogoImage source={Logo} />
                    </HeaderPrincipal>
                    <Divider />
                    <Title>
                        <TitleText>For you</TitleText>
                        <TitleText>Following</TitleText>
                    </Title>
                    <Divider />
                    <Tweet
                        UserName="John Doe"
                        Arroba="@Johndoe"
                        TweetText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis ad assumenda quas pariatur velit non perspiciatis eveniet, sit quis."
                        Time=".1h"
                        TextButtom="1000"
                    />
                    <Divider />
                    <Tweet
                        UserName="Gabriel Toledo"
                        Arroba="@FalleNCS"
                        TweetText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        Time=".30m"
                        TextButtom="1000"
                    />
                    <Divider />
                    <Tweet
                        UserName="Ia Revolução"
                        Arroba="@IArevolução"
                        TweetText="10 Ferramentas insanas de IA que você não pode perder em 2023:
                    1. Eightify 2. Perplexity 3. Opus 4. loopinhq "
                        Time=".30m"
                        TextButtom="1000"

                    />
                    <Divider />
                    <Tweet
                        UserName="Deby"
                        Arroba="@Debysouza"
                        TweetText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis ad assumenda quas pariatur velit non perspiciatis eveniet, sit quis."
                        Time=".5h"
                        TextButtom="1000"
                    />
                    <Divider />
                </Container>
            </ScrollView>
            <Footer />
        </>
    );
};

export default Principal;
