import React from 'react';
import { MainContainer } from '../../styles/container';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Container } from './styles';
import UserInfo from '../../pages/Home/UserInfo';
const Header: React.FC = () => {
    return (
        <Container>
            <UserInfo />
        </Container>
    );
};

export default Header;
