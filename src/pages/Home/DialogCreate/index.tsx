import { ReactNode } from 'react';
import { DefaultButton, ETypeButton } from '../../../components/DefaultButton';
import { ITask } from '../../../interfaces/ITask';
import Form from '../Form';
import icon_plus from '../../../assets/img/icon-plus.svg';
import { Container, Overlay, Content, Button, ButtonCancel } from './styles';
type DialogDeleteProps = {
    titleForm: string;
    handleSubmit(values: ITask): void;
};
function DialogCreate({ titleForm, handleSubmit }: DialogDeleteProps) {
    return (
        <Container>
            <Button>
                <img src={icon_plus} alt="" />
                Nova tarefa
            </Button>
            <Overlay>
                <Content>
                    <Form titleForm={titleForm} handleSubmit={handleSubmit} CloseButton={ButtonCancel} />
                </Content>
            </Overlay>
        </Container>
    );
}

export default DialogCreate;
