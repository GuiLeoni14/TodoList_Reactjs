import React, { useContext, useEffect, useState } from 'react';
import { BsTropicalStorm } from 'react-icons/bs';
import Label from '../../components/Label';
import { ActionsProps, TaskContext } from '../../context/TaskContext/context';
import { ITask } from '../../interfaces/ITask';
import Form from './Form';
import { factory_actions } from '../../context/TaskContext/factory_actions';
import { useTaskContext } from '../../hooks/useTaskContext';
const Home = () => {
    const { tasks, actions, loading } = useTaskContext();
    const [actionsState, setActionsState] = useState<ActionsProps>(actions);
    useEffect(() => {
        console.log('Executando...');
        const values = {
            name: 'Astronauta',
            description: 'Testando',
        };
        actionsState.createTask(values);
    }, [actionsState]);
    console.log(tasks);
    const handleOnSubmit = (values: ITask[]): void => {
        const data = { id: '1', name: 'teste', description: 'testando' };
    };
    return (
        <>
            <Form handleSubmit={handleOnSubmit} />
            {tasks?.map((task, index) => {
                return <span key={index}>{task.name}</span>;
            })}
        </>
    );
};

export default Home;
