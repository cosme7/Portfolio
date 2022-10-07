import React from 'react';
import {Link} from "react-router-dom";
import Photo from "../../Assets/about_01.jpg"
import HTML from "../../Assets/tech_01.svg"
import CSS from "../../Assets/tech_02.svg"
import Js from "../../Assets/tech_03.svg"
import Rect from "../../Assets/tech_04.svg"
import GitHub from "../../Assets/tech_05_D.svg"
import VSCode from "../../Assets/tech_06.svg"
import Proj01 from "../../Assets/projects react_01.png"
import Proj02 from "../../Assets/projects css_01.png"
import Proj03 from "../../Assets/projects react_04.png"
import * as S from "./style"

export default function Home() {
    return (
        <>
        <main>
            <S.Welcome aria-label='Apresentation'>
                <h2>Olá, sou <span>Cosme</span> Front-End Developer</h2>
                <p>Bem vindo ao meu Portfólio!</p>
                <S.BtnBox>
                    <button><Link to='/projects'>Ver Projetos</Link></button>
                    <button><a href="https://drive.google.com/file/d/1-32y4g2PFiOaW5RRRIqXl_3jlFUmDpQQ/view" target="_blank" rel="noreferrer">Currículo</a></button>
                </S.BtnBox>
            </S.Welcome>  
            <S.About aria-label='About'>
                <S.AboutWrapper>
                    <img src={Photo} alt="personal" />
                    <S.AboutBox>
                        <h2>Sobre <span>mim</span></h2>
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
                        <button><Link to='/about'>Mais Sobre Mim →</Link></button>    
                    </S.AboutBox>
                </S.AboutWrapper>
            </S.About>
            <S.Tech aria-label='Tools'>
                <h2>Minha <span>Tech Stack</span></h2>
                <p>Abaixo são às ferramentas que utilizo</p>
                <figure>
                    <img src={HTML} alt="HTML" title='HTML'/>
                    <img src={CSS} alt="CSS" title='CSS' />
                    <img src={Js} alt="JavaScript" title='JavaScript' />
                    <img src={Rect} alt="React" title='React' />
                    <img src={GitHub} alt="GitHub" title='GitHub' />
                    <img src={VSCode} alt="VSCode" title='VSCode' />
                </figure>
            </S.Tech>
            <S.Projects aria-label='Projects'>
                <h2>Alguns <span>Projetos</span></h2>
                <figure>
                    <img src={Proj01} alt="Harry Potter" title="Harry Potter" />
                    <img src={Proj02} alt="Site sobre Trends" title="Findtrend" />
                    <img src={Proj03} alt="ToDo List" title="ToDo" />
                </figure>
                <button><Link to='/projects'>Ver mais Projetos →</Link></button>
            </S.Projects>
        </main>
        </>
    );
}