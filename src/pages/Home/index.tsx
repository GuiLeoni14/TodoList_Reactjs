import React, { useContext, useEffect, useState } from 'react';
import { ActionsProps, TaskContext } from '../../context/TaskContext/context';
import { ITask } from '../../interfaces/ITask';
import Form from './Form';
import { useTaskContext } from '../../hooks/useTaskContext';
import { Container, LeftContent, MainHome, RightContent, ContentRight } from './styles';
import { MainContainer } from '../../styles/container';
import CardTask from './CardTask';
import UserInfo from './UserInfo';
import Search from '../../components/Search';
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
                    <h1>Tarefas</h1>
                    {tasks?.map((task) => (
                        <CardTask
                            key={task.guid}
                            title={task.title}
                            situation={task.situation}
                            guid={task.guid}
                            description={task.description}
                        />
                    ))}
                </ContentRight>
            </MainHome>
        </Container>
    );
};

export default Home;
