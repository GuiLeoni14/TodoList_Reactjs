import { DefaultButton } from '../../../components/DefaultButton';
import icon_point from '../../../assets/img/icon-points.svg';
import { Container, Text, Left, Right, Icon } from './styles';
import { ETypeButton } from '../../../components/DefaultButton';
import { ITask } from '../../../interfaces/ITask';
import ScrollArea from '../../../components/ScrollArea';
import { ETypeScrollArea } from '../../../components/ScrollArea';
import DialogEdit from '../DialogEdit';
import { FormEvent } from 'react';
import DialogDelete from '../DialogDelete';
type CardTaskProps = {
    guid: string;
    title: string;
    description: string;
    situation: string;
    handleOnSubmitEdit(values: ITask): void;
    handleOnSubmitDelete(values: ITask): void;
};
function CardTask({ guid, title, description, situation, handleOnSubmitEdit, handleOnSubmitDelete }: CardTaskProps) {
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
                <DialogEdit
                    values={{ guid, title, description, situation }}
                    titleForm="Editar Tarefa"
                    handleSubmit={handleOnSubmitEdit}
                />
                <DialogDelete handleSubmit={handleOnSubmitDelete} values={{ guid, title, description, situation }} />
            </Right>
        </Container>
    );
}

export default CardTask;
