import React from 'react';
import Menu from "./menu";
import {Link} from "react-router-dom";
import * as S from "./style";

export default function navigation(){
    return (
        <>
        <Menu />
        <nav aria-label='header navigation'>
            <S.List>
                <Link to='/'><li>Home</li></Link>
                <Link to='/projects'><li>Projetos</li></Link>
                <Link to='/about'><li>Sobre Mim</li></Link>
                <Link to='/contact'><li>Contato</li></Link>
            </S.List>
        </nav>
        </>
    );
}