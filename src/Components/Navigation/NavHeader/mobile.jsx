import React from 'react';
import {Link} from "react-router-dom"
import * as S from "./style"

export default function Mobile({open}){
    return (
        <>
        <S.Mobile open={open} aria-label='primary-navigation'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/about'>Sobre Mim</Link></li>
                <li><Link to='/contact'>Contato</Link></li>
            </ul>
        </S.Mobile>
        </>
    );
}