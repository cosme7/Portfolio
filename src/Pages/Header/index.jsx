import React from 'react';
import {NavHeader} from "../../Components/index"
import * as S from "./style";

export default function Header() {

    const logo = '< CSL />'

    return (
        <>
        <header>
            <S.Container>
                <h1>{logo}</h1>
                <NavHeader />
            </S.Container>
        </header>
        </>
    );
}
