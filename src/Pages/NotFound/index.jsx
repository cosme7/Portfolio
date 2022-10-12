import React from 'react';
import Button from '../../Components/Button'
import { Link } from 'react-router-dom';
import ErroPg from '../../Assets/error.png'
import * as S from "./style"

export default function NotFound() {
    return (
        <>
        <main>
            <S.Container id='main_content'>
                <img src={ErroPg} alt="Error" title="Error"/>
                <p>Página que você digitou não existe ou deu erro desculpe!</p>
                <Link to='/'><Button name={'Retornar a Home'}/></Link>
            </S.Container>   
        </main>
        </>
    );
}