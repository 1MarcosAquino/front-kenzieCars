import Link from 'next/link';
import { ButtonStyle } from './styles';

export const ButtonsHome = () => {
    return (
        <ButtonStyle>
            <Link className="login" href="/login" children="Fazer login" />
            <Link className="register" href="/register" children="Cadastrar" />
        </ButtonStyle>
    );
};
