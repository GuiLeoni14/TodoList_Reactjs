import { FunctionComponent, ChangeEvent, FormEvent, useState } from 'react';
import Label from '../../../components/Label';
import { ITask } from '../../../interfaces/ITask';

import { Container } from './styles';

interface FormProps {
    handleSubmit(values: ITask): void;
    tasksList?: ITask;
}
function Form({ handleSubmit, tasksList }: FormProps) {
    const [values, setValues] = useState(tasksList || {});
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    const submit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        handleSubmit(values as ITask);
    };

    return (
        <Container onSubmit={submit}>
            <Label name="name" text="Task Name" placeholder="Task name" handleChange={handleOnChange} />
            <Label
                name="description"
                text="Task description"
                placeholder="Task description"
                handleChange={handleOnChange}
            />
            <button type="submit">Cadastrar</button>
        </Container>
    );
}

export default Form;
