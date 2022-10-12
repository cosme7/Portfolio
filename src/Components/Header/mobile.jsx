import React from 'react';
import {Link} from "react-router-dom"
import * as S from "./style";

export default function mobile({open}){
    return (
        <>
        <S.Mobile open={open} aria-label='header navigation'>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/projects'><li>Projetos</li></Link>
                <Link to='/about'><li>Sobre Mim</li></Link>
                <Link to='/contact'><li>Contato</li></Link>
            </ul>
        </S.Mobile>
        </>
    );
}