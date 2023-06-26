import React from 'react'
import { Container, Logo } from './styles';
import Twitter from '../../../assets/Pictures/logoTwitter.png'
import { StatusBar } from 'react-native';

const Home = () => {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                translucent={true}
                backgroundColor="transparent"
            />
            <Container>
                <Logo source={Twitter}>
                </Logo>
            </Container>
        </>
    )
}

export default Home