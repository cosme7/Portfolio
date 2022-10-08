import React from 'react';
import {NavHeader} from "../../Components/index"
import * as S from "./style";

export default function Header() {

    const logo = '< CSL />'

    return (
        <>
        <header id='header-box'>
            <S.Container>
                <h1>{logo}</h1>
                <S.Skip href="#main_content" rel="noreferrer">Skip Navigation</S.Skip>
                <NavHeader />
            </S.Container>
        </header>
        </>
    );
}
