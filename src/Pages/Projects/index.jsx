import React from 'react';
import CardPJ from "../../Components/CardPJ"
import Title from '../../Components/Title';
import Button from '../../Components/Button'
import * as S from "./style"

export default function Projects() {
    return (
        <>
        <main>
            <S.Container id='main_content'>
                <Title name={'Meus '} emphasize={'Projetos'}/> 
                <S.CardBox>
                    <CardPJ />
                </S.CardBox> 
                <S.Info>
                    <a href='#header-box' rel="noreferrer"><Button aria-label='return-top' name={'↑'}/></a>
                </S.Info>
            </S.Container>
        </main>  
        </>
    );
}