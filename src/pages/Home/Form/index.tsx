import { FunctionComponent, ChangeEvent, FormEvent, useState } from 'react';
import Label from '../../../components/Label';
import { ITask } from '../../../interfaces/ITask';

import { Container } from './styles';

interface FormProps {
    handleSubmit(values: ITask[]): void;
    tasksList?: ITask[];
}
function Form({ handleSubmit, tasksList }: FormProps) {
    const [values, setValues] = useState<ITask[]>(tasksList || []);
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    const submit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        handleSubmit(values);
    };

    return (
        <Container onSubmit={submit}>
            <Label name="name" text="Task Name" placeholder="Task name" handleChange={handleOnChange} />
            <button type="submit">Cadastrar</button>
        </Container>
    );
}

export default Form;
