import React, { useContext, useEffect, useState } from 'react';
import { ActionsProps, TaskContext } from '../../context/TaskContext/context';
import { ITask } from '../../interfaces/ITask';
import Form from './Form';
import { useTaskContext } from '../../hooks/useTaskContext';
import { Container, LeftContent, MainHome, RightContent } from './styles';
import { MainContainer } from '../../styles/container';
import CardTask from './CardTask';
import UserInfo from './UserInfo';
const Home = () => {
    const { tasks, actions, loading } = useTaskContext();
    const [actionsState, setActionsState] = useState<ActionsProps>(actions);
    console.log(tasks);
    useEffect(() => {
        actionsState.loadTask();
    }, [actionsState]);
    const handleOnSubmit = (values: ITask): void => {
        actionsState.createTask(values);
    };
    return (
        <Container>
            <MainContainer>
                <MainHome>
                    <LeftContent>
                        <UserInfo />
                    </LeftContent>
                    <RightContent />
                </MainHome>
            </MainContainer>
        </Container>
    );
};

export default Home;
