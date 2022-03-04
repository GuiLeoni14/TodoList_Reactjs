import { ChangeEvent } from 'react';
import { Container, Input } from './styles';

interface LabelProps {
    text: string;
    name: string;
    placeholder: string;
    handleChange(event: ChangeEvent<HTMLInputElement>): void;
}

function Label({ text, name, placeholder, handleChange }: LabelProps) {
    return (
        <>
            <Container htmlFor={name}>{text}</Container>
            <Input name={name} placeholder={placeholder} id={name} onChange={handleChange} />
        </>
    );
}

export default Label;
