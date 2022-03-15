import { ReactNode } from 'react';
import { DefaultButton, ETypeButton } from '../../../components/DefaultButton';
import { ITask } from '../../../interfaces/ITask';
import Form from '../Form';
import icon_point from '../../../assets/img/icon-points.svg';
import icon_plus from '../../../assets/img/icon-plus.svg';
import { Container, Overlay, Content, Button, ButtonCancel, Icon } from './styles';
type DialogDeleteProps = {
    titleForm: string;
    handleSubmit(values: ITask): void;
    values: ITask;
};
function DialogEdit({ titleForm, handleSubmit, values }: DialogDeleteProps) {
    return (
        <Container>
            <Button>
                <Icon src={icon_point} />
            </Button>
            <Overlay>
                <Content>
                    <Form titleForm={titleForm} handleSubmit={handleSubmit} CloseButton={ButtonCancel} task={values} />
                </Content>
            </Overlay>
        </Container>
    );
}

export default DialogEdit;
