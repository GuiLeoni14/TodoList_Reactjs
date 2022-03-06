import React, { useContext, useEffect, useState } from 'react';
import { BsTropicalStorm } from 'react-icons/bs';
import Label from '../../components/Label';
import { TaskContext } from '../../context/TaskContext/context';
import { ITask } from '../../interfaces/ITask';
import Form from './Form';
import { factory_actions } from '../../context/TaskContext/factory_actions';
import { useTaskContext } from '../../hooks/useTaskContext';
const Home = () => {
    const { tasks, dispatchTasks, loading } = useTaskContext();
    useEffect(() => {
        console.log('Executando...');
        factory_actions(dispatchTasks).create();
    }, [dispatchTasks]);

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
