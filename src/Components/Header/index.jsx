import React from 'react';
import Nav from './navigation'
import Logo from '../../Assets/logo.png'
import * as S from "./style";

export default function Header() {

    return (
        <>
        <header id='header-box'>
            <S.Container>
                <img src={Logo} alt="Logo" />
                <S.Skip href="#main_content" rel="noreferrer">Skip Navigation</S.Skip>
                <Nav />
            </S.Container>
        </header>
        </>
    );
}
