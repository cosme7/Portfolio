import React from 'react';
import {Link} from "react-router-dom"
import * as S from "./style"

export default function NavFooter(){
    return (
        <>
        <S.Nav aria-label='primary-navigation'>
            <S.List>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projetos</Link></li>
                <li><Link to='/about'>Sobre Mim</Link></li>
                <li><Link to='/contact'>Contato</Link></li>
            </S.List>
        </S.Nav>   
        </>
    );
}