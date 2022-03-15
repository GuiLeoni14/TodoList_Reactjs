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
import Loading from '../../components/Loading';
const Home = () => {
    const { tasks, actions, loading } = useTaskContext();
    const [actionsState, setActionsState] = useState<ActionsProps>(actions);
    useEffect(() => {
        actionsState.loadTask();
    }, [actionsState]);
    const handleOnSubmit = (values: ITask): void => {
        console.log('Me chamou');
        actionsState.createTask(values);
    };
    const handleOnSubmitEdit = (values: ITask): void => {
        actionsState.editTask(values);
    };
    const handleOnSubmitDelete = (values: ITask): void => {
        console.log(values);
        actionsState.deleteTask(values.guid);
    };
    if (loading) return <Loading />;
    return (
        <Container>
            <MainHome>
                <ContentRight>
                    <Search placeholder="Procurar tarefas" />
                    <Text>
                        <h1>Tarefas</h1>
                        <DialogCreate titleForm="Criar Tarefa" handleSubmit={handleOnSubmit} />
                    </Text>
                    <ScrollArea>
                        {tasks &&
                            tasks.length > 0 &&
                            tasks.map((task) => (
                                <CardTask
                                    key={task.guid}
                                    title={task.title}
                                    situation={task.situation}
                                    guid={task.guid}
                                    description={task.description}
                                    handleOnSubmitEdit={handleOnSubmitEdit}
                                    handleOnSubmitDelete={handleOnSubmitDelete}
                                />
                            ))}
                    </ScrollArea>
                </ContentRight>
            </MainHome>
        </Container>
    );
};

export default Home;
