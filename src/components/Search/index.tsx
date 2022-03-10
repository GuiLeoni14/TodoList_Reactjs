import icon_search from '../../assets/img/icon-search.svg';
import { Container } from './styles';

type SearchProps = {
    placeholder: string;
    handleChange?(): void;
};

export default function Search({ placeholder, handleChange }: SearchProps) {
    return (
        <Container>
            <img src={icon_search} alt="" />
            <input type="search" placeholder={placeholder} onChange={handleChange} />
        </Container>
    );
}