import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './navigation'
import Logo from '../../Assets/logo.png'
import * as S from "./style";

export default function Header() {

    return (
        <>
        <header id='header-box'>
            <S.Container>
                <Link to='/'><img src={Logo} alt="Logo" /></Link>
                <S.Skip href="#main_content" rel="noreferrer">Skip Navigation</S.Skip>
                <Nav />
            </S.Container>
        </header>
        </>
    );
}
