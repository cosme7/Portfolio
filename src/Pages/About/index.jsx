import React from 'react';
import CardAbout from '../../Components/CardAbout';
import {Link} from "react-router-dom";
import * as S from "./style"
import Photo from "../../Assets/about_01.jpg"
import HTML from "../../Assets/tech_01.svg"
import CSS from "../../Assets/tech_02.svg"
import Js from "../../Assets/tech_03.svg"
import Rect from "../../Assets/tech_04.svg"
import StlComponent from "../../Assets/tech_05.svg"
import GitHub from "../../Assets/tech_06_D.svg"

export default function About() {
    return (
        <>
        <main>
            <S.Container id='main_content'>
                <S.Wrapper>
                    <img src={Photo} alt="personal" title="personal"/>
                    <S.AbouTxt>
                        <h2>Cosme da S. Leite</h2>
                        <p>Comecei a estudar Front-End no início desse ano (2022) e me apaixonei, atualmente moro em Bangu - Rio de Janeiro.
                            Gosto da ideia de trabalhar em equipe, acho que é uma forma de me conectar com novas habilidades e oferecer meu conhecimento ao time de forma a melhorar a produtividade no desenvolvimento de um produto digital. Gosto de descobrir coisas novas diariamente e me tornar um ativo valioso, por isso estou constantemente aprendendo e pesquisando.
                            Procuro buscar o máximo de Feedback possível sobre os projetos, de forma a melhorar e poder fazer projetos que sejam acessíveis e funcionais.
                            Vamos conversar!</p>
                        <button><Link to='/contact'>Contato →</Link></button>    
                    </S.AbouTxt>
                </S.Wrapper>
            </S.Container>
            <S.Tech>
                <h2>Minha <span>Tech Stack</span></h2>
                <div>
                    <CardAbout 
                    image ={HTML}
                    title ={'HTML'}
                    description ={'Linguagem de Marcação de Hipertexto é a linguagem usado para descrever e definir o conteúdo de uma página Web.'} />
                    <CardAbout 
                    image ={CSS}
                    title ={'CSS3'}
                    description ={'As Folhas de Estilo em Cascata (em inglês: Cascading Style Sheets) são usadas para descrever a aparência do conteúdo Web.'} />
                    <CardAbout 
                    image ={Js}
                    title ={'JavaScript'}
                    description ={'É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias de Front-End.'} />
                    <CardAbout 
                    image ={Rect}
                    title ={'React.Js'}
                    description ={'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'} />
                    <CardAbout 
                    image ={StlComponent}
                    title ={'Styled-Component'}
                    description ={'É uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.'} />
                    <CardAbout 
                    image ={GitHub}
                    title ={'GitHub'}
                    description ={'É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.'} />
                </div>
            </S.Tech>
        </main>
        </>
    );
}