import { ReactNode } from 'react';

import { Container } from './styles';
import loading_gif from '../../assets/img/loading.gif';

function Loading() {
    return (
        <Container>
            <img src={loading_gif} alt="" />
        </Container>
    );
}

export default Loading;
