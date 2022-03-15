import { TextField } from '@mui/material';
import { FunctionComponent, ChangeEvent, FormEvent, useState, ReactNode } from 'react';
import { DefaultButton, ETypeButton } from '../../../components/DefaultButton';
import Label from '../../../components/Label';
import { ITask } from '../../../interfaces/ITask';
import { Container, Input, Title, Buttons, Button } from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { useTaskContext } from '../../../hooks/useTaskContext';
interface FormProps {
    handleSubmit(values: ITask): void;
    titleForm: string;
    CloseButton: React.ForwardRefExoticComponent<Dialog.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
    task?: ITask;
    id?: string | number;
}
function Form({ handleSubmit, titleForm, task, CloseButton, id }: FormProps) {
    const [values, setValues] = useState(task || ({} as ITask));

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    const handleOnChangeSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
        console.log(event.target.options[event.target.selectedIndex].text);
        setValues({ ...values, situation: event.target.options[event.target.selectedIndex].text });
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
                required
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
                required
                name="description"
                InputProps={{ style: { fontSize: 16 } }}
                InputLabelProps={{ style: { fontSize: 16 } }}
                value={values.description ? values.description : ''}
                label="Descrição da Tarefa"
                variant="outlined"
                onChange={handleOnChange}
            />
            {/* <select name="situation" id="situation" onChange={handleOnChangeSelect}>
                <option value="uncompleted">Em progresso</option>
                <option value="completed">Concluído</option>
            </select> */}
            <Buttons>
                <CloseButton name="cancelar">Cancelar</CloseButton>
                <Button type="submit" name="salvar">
                    Salvar
                </Button>
            </Buttons>
        </Container>
    );
}

export default Form;
