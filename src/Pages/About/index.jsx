import React from 'react';
import Photo from "../../Assets/about_02.jpeg"
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
                    <img src={Photo} alt="personal" title="Indicação dá Tulani"/>
                    <S.AbouTxt>
                        <Title emphasize={'Cosme da S. Leite'}/>  
                        <p>Comecei a estudar Front-End no início desse ano (2022) 
                            e me apaixonei, atualmente moro em Bangu - Rio de Janeiro. 
                            </p>
                            <p>Gosto de trabalhar em equipe, pois é um meio de me conectar 
                            com novas habilidades e oferecer meu conhecimento ao time 
                            de forma a melhorar a produtividade no desenvolvimento de 
                            um produto digital. Sou proativo, estou constantemente 
                            pesquisando e aprendendo. Busco o máximo de Feedback 
                            possível sobre os projetos, para assim melhorá-los e 
                            torná-los acessíveis e funcionais. Vamos conversar!</p>
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