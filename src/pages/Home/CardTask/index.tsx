import { DefaultButton } from '../../../components/DefaultButton';
import icon_point from '../../../assets/img/icon-points.svg';
import { Container, Text, Left, Right, Icon } from './styles';
import { ETypeButton } from '../../../components/DefaultButton';
import { ITask } from '../../../interfaces/ITask';
import ScrollArea from '../../../components/ScrollArea';
import { ETypeScrollArea } from '../../../components/ScrollArea';
function CardTask({ guid, title, description, situation }: ITask) {
    console.log('Fui chamado');
    return (
        <Container>
            <Left>
                <Text>
                    <h4>{title}</h4>
                    <ScrollArea typeScroll={ETypeScrollArea.CARD_TASK}>
                        <p>{description}</p>
                    </ScrollArea>
                </Text>
                <DefaultButton
                    text={situation === 'completed' ? 'Concluído' : 'Em progresso'}
                    typeButton={situation === 'completed' ? ETypeButton.completed : ETypeButton.progress}
                />
            </Left>
            <Right>
                <Icon src={icon_point} />
            </Right>
        </Container>
    );
}

export default CardTask;
