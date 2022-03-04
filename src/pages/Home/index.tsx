import React from 'react';
import Label from '../../components/Label';
import { ITask } from '../../interfaces/ITask';
import Form from './Form';
const Home = () => {
    const handleOnSubmit = (values: ITask[]): void => {
        console.log(values);
    };
    return (
        <>
            <Form handleSubmit={handleOnSubmit} />
        </>
    );
};

export default Home;
