import React from 'react';
import Title from '../../Components/Title';
import Button from '../../Components/Button'
import {Link} from "react-router-dom";
import * as S from "./style"
import Photo from "../../Assets/about_01.jpg"
import HTML from "../../Assets/tech_01.svg"
import CSS from "../../Assets/tech_02.svg"
import Js from "../../Assets/tech_03.svg"
import Rect from "../../Assets/tech_04.svg"
import StlComponent from "../../Assets/tech_05.svg"
import GitHub from "../../Assets/tech_06.png"
import Proj01 from "../../Assets/projects react_01.png"
import Proj02 from "../../Assets/projects css_01.png"
import Proj03 from "../../Assets/projects react_04.png"

export default function Home() {
    return (
        <>
        <main>
            <S.Welcome id='main_content'>
                <h1>Olá, sou <span>Cosme</span> Front-End Developer</h1>
                <p>Bem vindo ao meu Portfólio!</p>
                <S.BtnBox>
                    <Link to='/projects'><Button name={'Ver Projetos'}/></Link>
                    <a href="https://drive.google.com/file/d/1FiP7d1q1Natlyt5qi7TbWYXpGj9xl7xz/view" target="_blank" rel="noreferrer"><Button name={'Currículo'}/></a>
                </S.BtnBox>
            </S.Welcome>  
            <S.About >
                <S.AboutWrapper>
                    <img src={Photo} alt="personal" title='Indicação do Mozart'/>
                    <S.AboutBox>
                        <Title name={'Sobre '} emphasize={'mim'}/>  
                        <p>Sou Desenvolvedor Front End,
                            trabalhando com projetos próprios e
                            educacionais, direcionados à
                            modernizar, inovar e facilitar a vida
                            dos usuários através de sistemas
                            pensados na experiência
                            do usuário e acessibilidade. Tenho
                            bons conhecimentos em JavaScript,
                            adotando diversos conhecimentos
                            em React.js .</p>
                        <Link to='/about'><Button name={'Mais Sobre Mim →'}/></Link>   
                    </S.AboutBox>
                </S.AboutWrapper>
            </S.About>
            <S.Tech >
                <Title name={'Minha '} emphasize={'Tech Stack'}/>
                <p>Abaixo são as ferramentas que utilizo</p>
                <figure>
                    <img src={HTML} alt="HTML" title='HTML'/>
                    <img src={CSS} alt="CSS" title='CSS' />
                    <img src={Js} alt="JavaScript" title='JavaScript' />
                    <img src={Rect} alt="React" title='React' />
                    <img src={StlComponent} alt="Styled-Components" title='Styled-Components' />
                    <img src={GitHub} alt="GitHub" title='GitHub' />
                </figure>
            </S.Tech>
            <S.Projects>
                <Title name={'Alguns '} emphasize={'Projetos'}/>    
                <figure>
                    <img src={Proj01} alt="Harry Potter" title="Harry Potter" />
                    <img src={Proj02} alt="Site sobre Trends" title="Findtrend" />
                    <img src={Proj03} alt="ToDo List" title="ToDo" />
                </figure>
                <Link to='/projects'><Button name={'Ver mais Projetos →'}/></Link>
            </S.Projects>
        </main>
        </>
    );
}