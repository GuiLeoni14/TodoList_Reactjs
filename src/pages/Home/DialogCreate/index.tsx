import { ReactNode } from 'react';
import { DefaultButton, ETypeButton } from '../../../components/DefaultButton';

import { Container, Overlay, Content, Button } from './styles';

function DialogCreate() {
    return (
        <Container>
            <Button>
                <DefaultButton text="Create Task" typeButton={ETypeButton.created} />
            </Button>
            <Overlay>
                <Content>
                    <h1>Testando</h1>
                </Content>
            </Overlay>
        </Container>
    );
}

export default DialogCreate;
