import { DefaultButton } from '../../../components/DefaultButton';
import icon_point from '../../../assets/img/icon-points.svg';
import {
    Container,
    Text,
    Left,
    Right,
    Icon,
    ScrollView,
    ScrollBar,
    ScrollThumb,
    ScrollCorner,
    ScrollArea,
} from './styles';
import { ETypeButton } from '../../../components/DefaultButton';
function CardTask() {
    return (
        <Container>
            <Left>
                <Text>
                    <h4>Nome</h4>
                    <ScrollArea>
                        <ScrollView>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nulla aspernatur dolore
                                at nisi pariatur voluptatem natus possimus, consequuntur officia obcaecati, voluptate,
                                eveniet enim! Repellat ut nam distinctio optio harum. Lorem ipsum dolor sit amet
                            </p>
                        </ScrollView>
                        <ScrollBar orientation="vertical">
                            <ScrollThumb />
                        </ScrollBar>
                        <ScrollBar orientation="horizontal">
                            <ScrollThumb />
                        </ScrollBar>
                        <ScrollCorner />
                    </ScrollArea>
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
