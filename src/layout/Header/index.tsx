import React from 'react';
import { MainContainer } from '../../styles/container';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Container, ListIcons, Main } from './styles';
const Header: React.FC = () => {
    return (
        <Container>
            <Main>
                <ListIcons>
                    <BsGithub />
                    <BsLinkedin />
                </ListIcons>
            </Main>
        </Container>
    );
};

export default Header;
