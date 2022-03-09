import { ChangeEvent } from 'react';
import { Container, Label as LabelRoot, Input, TextArea } from './styles';

interface LabelProps {
    text: string;
    name: string;
    placeholder: string;
    handleChange(event: any): void;
    textarea?: boolean;
}

function Label({ text, name, placeholder, handleChange, textarea = false }: LabelProps) {
    return (
        <Container>
            {textarea ? (
                <TextArea
                    required
                    onChange={handleChange}
                    name={name}
                    placeholder={placeholder}
                    id={name}
                    rows={5}
                ></TextArea>
            ) : (
                <Input required type="text" name={name} placeholder={placeholder} id={name} onChange={handleChange} />
            )}
            <LabelRoot htmlFor={name}>{text}</LabelRoot>
        </Container>
    );
}

export default Label;
