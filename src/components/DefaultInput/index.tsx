import { FormEvent, HTMLInputTypeAttribute, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Input } from './styles';

type DefaultInputProps = {
    text: string;
    children?: ReactNode;
    customClass?: string;
    type?: HTMLInputTypeAttribute;
    link?: string;
};
export function DefaultButton({ children, text, customClass, type = 'submit', link }: DefaultInputProps) {
    if (link) {
        return <Link to={link}>{children}</Link>;
    }
    return <Input type={type} placeholder={text} className={customClass} />;
}
