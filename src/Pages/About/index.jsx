import React from 'react';
import Photo from "../../Assets/about_01.jpg"
import CardAbout from '../../Components/CardAbout';
import Title from '../../Components/Title';
import Button from '../../Components/Button';
import {Link} from "react-router-dom";
import * as S from "./style"

export default function About() {
    return (
        <>
        <main>
            <S.Container id='main_content'>
                <S.Wrapper aria-labelledby='about-me'>
                    <img src={Photo} alt="personal" title="personal"/>
                    <S.AbouTxt>
                        <Title emphasize={'Cosme da S. Leite'}/>  
                        <p>Comecei a estudar Front-End no início desse ano (2022) e me apaixonei, atualmente moro em Bangu - Rio de Janeiro.
                            Gosto da ideia de trabalhar em equipe, acho que é uma forma de me conectar com novas habilidades e oferecer meu conhecimento ao time de forma a melhorar a produtividade no desenvolvimento de um produto digital. Gosto de descobrir coisas novas diariamente e me tornar um ativo valioso, por isso estou constantemente aprendendo e pesquisando.
                            Procuro buscar o máximo de Feedback possível sobre os projetos, de forma a melhorar e poder fazer projetos que sejam acessíveis e funcionais.
                            Vamos conversar!</p>
                        <Link to='/contact'><Button name={'Contato →'}/></Link>   
                    </S.AbouTxt>
                </S.Wrapper>
            </S.Container>
            <S.Tech aria-labelledby='my tech stack'>
                <Title name={'Minha'} emphasize={'Tech Stack'}/>  
                <div>
                    <CardAbout />
                </div>
            </S.Tech>
        </main>
        </>
    );
}