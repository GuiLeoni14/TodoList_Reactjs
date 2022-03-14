import React, { useContext, useEffect, useState } from 'react';
import { ActionsProps, TaskContext } from '../../context/TaskContext/context';
import { ITask } from '../../interfaces/ITask';
import Form from './Form';
import { useTaskContext } from '../../hooks/useTaskContext';
import { Container, LeftContent, MainHome, RightContent, ContentRight, Text } from './styles';
import CardTask from './CardTask';
import Search from '../../components/Search';
import DialogCreate from './DialogCreate';
import ScrollArea from '../../components/ScrollArea';
const Home = () => {
    const { tasks, actions, loading } = useTaskContext();
    console.log(tasks);
    const [actionsState, setActionsState] = useState<ActionsProps>(actions);
    useEffect(() => {
        actionsState.loadTask();
    }, [actionsState]);
    const handleOnSubmit = (values: ITask): void => {
        actionsState.createTask(values);
    };
    return (
        <Container>
            <MainHome>
                <ContentRight>
                    <Search placeholder="Procurar tarefas" />
                    <Text>
                        <h1>Tarefas</h1>
                        <DialogCreate />
                    </Text>
                    <ScrollArea>
                        {tasks?.map((task) => (
                            <CardTask
                                key={task.guid}
                                title={task.title}
                                situation={task.situation}
                                guid={task.guid}
                                description={task.description}
                            />
                        ))}
                    </ScrollArea>
                </ContentRight>
            </MainHome>
        </Container>
    );
};

export default Home;
