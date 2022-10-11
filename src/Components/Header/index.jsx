import React from 'react';
import Nav from './navigation'
import * as S from "./style";

export default function Header() {

    const logo = '< CSL />'

    return (
        <>
        <header id='header-box'>
            <S.Container>
                <h1>{logo}</h1>
                <S.Skip href="#main_content" rel="noreferrer">Skip Navigation</S.Skip>
                <Nav />
            </S.Container>
        </header>
        </>
    );
}
