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
import GitHub from "../../Assets/tech_06_D.svg"
import Proj01 from "../../Assets/projects react_01.png"
import Proj02 from "../../Assets/projects css_01.png"
import Proj03 from "../../Assets/projects react_04.png"

export default function Home() {
    return (
        <>
        <main>
            <S.Welcome aria-labelledby='Apresentation' id='main_content'>
                <Title name={'Olá, sou '} emphasize={'Cosme'} end={'Front-End Developer'}/>
                <p>Bem vindo ao meu Portfólio!</p>
                <S.BtnBox>
                    <Link to='/projects'><Button name={'Ver Projetos'}/></Link>
                    <a href="https://drive.google.com/file/d/1-32y4g2PFiOaW5RRRIqXl_3jlFUmDpQQ/view" target="_blank" rel="noreferrer"><Button name={'Currículo'}/></a>
                </S.BtnBox>
            </S.Welcome>  
            <S.About aria-labelledby='About'>
                <S.AboutWrapper>
                    <img src={Photo} alt="personal" />
                    <S.AboutBox>
                        <Title name={'Sobre '} emphasize={'mim'}/>  
                        <p>Sou Desenvolvedor Front End,
                            trabalhando com projetos próprios e
                            educacionais, direcionados à
                            modernizar, inovar e facilitar a vida
                            dos usuários através de sistemas
                            pensados com excelente experiência
                            do usuário e acessibilidade. Tenho
                            bons conhecimentos em JavaScript,
                            adotando diversos conhecimentos
                            em React.js .</p>
                        <Link to='/about'><Button name={'Mais Sobre Mim →'}/></Link>   
                    </S.AboutBox>
                </S.AboutWrapper>
            </S.About>
            <S.Tech aria-labelledby='Tools'>
                <Title name={'Minha '} emphasize={'Tech Stack'}/>
                <p>Abaixo são às ferramentas que utilizo</p>
                <figure>
                    <img src={HTML} alt="HTML" title='HTML'/>
                    <img src={CSS} alt="CSS" title='CSS' />
                    <img src={Js} alt="JavaScript" title='JavaScript' />
                    <img src={Rect} alt="React" title='React' />
                    <img src={StlComponent} alt="Styled-Components" title='Styled-Components' />
                    <img src={GitHub} alt="GitHub" title='GitHub' />
                </figure>
            </S.Tech>
            <S.Projects aria-labelledby='Projects'>
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