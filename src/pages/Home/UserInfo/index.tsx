import { ReactNode, useEffect, useState } from 'react';
import { Container, Top, ImageUser, DescriptionUser, Bottom, Task, About } from './styles';
import icon_user from '../../../assets/img/icon-user.svg';
import icon_task from '../../../assets/img/icon-task.svg';
import icon_about from '../../../assets/img/icon-about.svg';
interface UserInfoProps {
    children: ReactNode;
}

function UserInfo() {
    const [hrefPage, setHrefPage] = useState<string>('');
    useEffect(() => {
        setHrefPage(document.location.href);
    }, []);
    return (
        <Container>
            <Top>
                <ImageUser>
                    <img src={icon_user} alt="" />
                </ImageUser>
                <DescriptionUser>
                    <h4>Nome</h4>
                    <span>Função</span>
                </DescriptionUser>
            </Top>
            <Bottom>
                <Task className={!hrefPage.includes('sobre') ? 'checked' : 'disable'}>
                    <img src={icon_task} alt="" />
                    <span>Tarefas</span>
                </Task>
                <About className={hrefPage.includes('sobre') ? 'checked' : 'disable'}>
                    <img src={icon_about} alt="" />
                    <span>Sobre</span>
                </About>
            </Bottom>
        </Container>
    );
}

export default UserInfo;
