import { ReactNode } from 'react';
import { DefaultButton, ETypeButton } from '../../../components/DefaultButton';
import { ITask } from '../../../interfaces/ITask';
import Form from '../Form';
import icon_delete from '../../../assets/img/icon-delete.svg';
import {
    Container,
    Overlay,
    Content,
    Button,
    ButtonCancel,
    Icon,
    Title,
    Description,
    ButtonClose,
    Buttons,
} from './styles';
type DialogDeleteProps = {
    values: ITask;
    handleSubmit(values: ITask): void;
};
function DialogDelete({ handleSubmit, values }: DialogDeleteProps) {
    return (
        <Container>
            <Button>
                <Icon src={icon_delete} />
            </Button>
            <Overlay>
                <Content>
                    <Title>Deseja mesmo deletar {values.title}?</Title>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa reiciendis.
                    </Description>
                    <Buttons>
                        <ButtonClose>Cancelar</ButtonClose>
                        <DefaultButton
                            text="Deletar"
                            typeButton={ETypeButton.delete}
                            handleClick={() => handleSubmit(values)}
                        />
                    </Buttons>
                </Content>
            </Overlay>
        </Container>
    );
}

export default DialogDelete;
