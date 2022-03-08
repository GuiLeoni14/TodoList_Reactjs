import { ChangeEvent } from 'react';
import { Container, Label as LabelRoot, Input } from './styles';

interface LabelProps {
    text: string;
    name: string;
    placeholder: string;
    handleChange(event: ChangeEvent<HTMLInputElement>): void;
}

function Label({ text, name, placeholder, handleChange }: LabelProps) {
    return (
        <Container>
            <Input required type="email" name={name} placeholder={placeholder} id={name} onChange={handleChange} />
            <LabelRoot htmlFor={name}>{text}</LabelRoot>
        </Container>
    );
}

export default Label;
