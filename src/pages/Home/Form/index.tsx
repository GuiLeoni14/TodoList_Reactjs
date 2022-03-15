import { TextField } from '@mui/material';
import { FunctionComponent, ChangeEvent, FormEvent, useState, ReactNode } from 'react';
import { DefaultButton, ETypeButton } from '../../../components/DefaultButton';
import Label from '../../../components/Label';
import { ITask } from '../../../interfaces/ITask';
import { Container, Input, Title, Buttons } from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { useTaskContext } from '../../../hooks/useTaskContext';
interface FormProps {
    handleSubmit(values: ITask): void;
    titleForm: string;
    CloseButton: React.ForwardRefExoticComponent<Dialog.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
    task?: ITask;
}
function Form({ handleSubmit, titleForm, task, CloseButton }: FormProps) {
    const [values, setValues] = useState(task || ({} as ITask));
    const { loading } = useTaskContext();
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
            <Input
                size="medium"
                id="title"
                name="title"
                value={values.title ? values.title : ''}
                label="Nome da Tarefa"
                InputProps={{ style: { fontSize: 16 } }}
                InputLabelProps={{ style: { fontSize: 16 } }}
                variant="outlined"
                onChange={handleOnChange}
            />
            <Input
                id="description"
                name="description"
                InputProps={{ style: { fontSize: 16 } }}
                InputLabelProps={{ style: { fontSize: 16 } }}
                value={values.description ? values.description : ''}
                label="Descrição da Tarefa"
                variant="outlined"
                onChange={handleOnChange}
            />
            <Buttons>
                <CloseButton>Cancelar</CloseButton>
                <DefaultButton text="Salvar" typeButton={ETypeButton.save} />
            </Buttons>
        </Container>
    );
}

export default Form;
