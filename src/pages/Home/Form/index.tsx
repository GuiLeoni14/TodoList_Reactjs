import { FunctionComponent, ChangeEvent, FormEvent, useState } from 'react';
import { DefaultButton, ETypeButton } from '../../../components/DefaultButton';
import Label from '../../../components/Label';
import { ITask } from '../../../interfaces/ITask';
import { Container, Title } from './styles';

interface FormProps {
    handleSubmit(values: ITask): void;
    titleForm: string;
    tasksList?: ITask;
}
function Form({ handleSubmit, titleForm, tasksList }: FormProps) {
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
            <Title>{titleForm}</Title>
            <Label name="name" text="Task Name" placeholder="Task name" handleChange={handleOnChange} />
            <Label
                name="description"
                text="Task description"
                placeholder="Task description"
                textarea={true}
                handleChange={handleOnChange}
            />
            <DefaultButton text="Cadastrar" typeButton={ETypeButton.submit} />
        </Container>
    );
}

export default Form;
