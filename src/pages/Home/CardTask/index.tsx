import { ReactNode } from 'react';
import { DefaultButton } from '../../../components/DefaultButton';
import { ITask } from '../../../interfaces/ITask';
import icon_point from '../../../assets/img/icon-points.svg';
import { Container, Text, Left, Right, Icon } from './styles';
import { ETypeButton } from '../../../components/DefaultButton';
function CardTask() {
    return (
        <Container>
            <Left>
                <Text>
                    <h4>Nome</h4>
                    <p>Descrição</p>
                </Text>
                <DefaultButton text="Concluído" typeButton={ETypeButton.completed} />
            </Left>
            <Right>
                <Icon src={icon_point} />
            </Right>
        </Container>
    );
}

export default CardTask;
