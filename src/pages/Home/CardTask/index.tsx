import { ReactNode } from 'react';
import { ITask } from '../../../interfaces/ITask';

import { Container, Text, Title, Description, IconEdit, Icon, IconDelete, IconEnum } from './styles';

function CardTask({ name, description }: ITask) {
    return (
        <Container>
            <Icon type={IconEnum.edit}>
                <IconEdit />
            </Icon>
            <Icon type={IconEnum.delete}>
                <IconDelete />
            </Icon>
            <Text>
                <Title>Nome:</Title>
                <Description>{name}</Description>
            </Text>
            <Text>
                <Title>Descrição:</Title>
                <Description>{description}</Description>
            </Text>
        </Container>
    );
}

export default CardTask;
