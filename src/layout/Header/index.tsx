import React from 'react';
import { Container } from '../../styles/container';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { ContainerHeader, ListIcons, MainHeader } from './styles';
const Header = () => {
    return (
        <MainHeader>
            <ContainerHeader>
                <ListIcons>
                    <BsGithub />
                    <BsLinkedin />
                </ListIcons>
            </ContainerHeader>
        </MainHeader>
    );
};

export default Header;
