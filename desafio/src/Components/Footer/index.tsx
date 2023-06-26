import React from 'react';
import { FooterContainer, FooterButton, Divider, AddButton, ButtonView } from './styles'
import { Feather } from '@expo/vector-icons';

const Footer = () => {
    return (
        <>
            <Divider />
            <FooterContainer>
                <FooterButton>
                    <Feather name="home" size={25} color="#ffffff" />
                </FooterButton>
                <FooterButton>
                    <Feather name="search" size={25} color="#ffffff" />
                </FooterButton>
                <FooterButton>
                    <Feather name="target" size={25} color="#ffffff" />
                </FooterButton>
                <FooterButton>
                    <Feather name="bell" size={25} color="#ffffff" />
                </FooterButton>
                <FooterButton>
                    <Feather name="mail" size={25} color="#ffffff" />
                </FooterButton>
            </FooterContainer>
            <ButtonView>
                <AddButton>
                    <Feather name="plus" size={24} color="#ffffff" />
                </AddButton>
            </ButtonView>
        </>
    );
};

export default Footer;