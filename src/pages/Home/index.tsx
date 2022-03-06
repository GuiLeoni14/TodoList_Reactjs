import React, { useContext } from 'react';
import { BsTropicalStorm } from 'react-icons/bs';
import Label from '../../components/Label';
import { TaskContext, useTasks } from '../../context/TaskContext/context';
import { ITask } from '../../interfaces/ITask';
import Form from './Form';
const Home = () => {
    const { stateTasks } = useContext(TaskContext);
    console.log(stateTasks);
    const handleOnSubmit = (values: ITask[]): void => {
        const data = { id: '1', name: 'teste', description: 'testando' };
    };
    return (
        <>
            <Form handleSubmit={handleOnSubmit} />
        </>
    );
};

export default Home;
