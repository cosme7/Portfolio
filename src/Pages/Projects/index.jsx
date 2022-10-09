import React from 'react';
import CardPJ from "../../Components/CardPJ"
import * as S from "./style"
import ProjRC01 from "../../Assets/projects react_01.png"
import ProjRC02 from "../../Assets/projects react_02-CC.png"
import ProjRC03 from "../../Assets/projects react_03.png"
import ProjRC04 from "../../Assets/projects react_04.png"
import ProjCS00 from "../../Assets/projects css_00.png"
import ProjCS01 from "../../Assets/projects css_01.png"
import ProjCS02 from "../../Assets/projects css_02.png"
import ProjCS03 from "../../Assets/projects css_03.png"
import ProjCS04 from "../../Assets/projects css_04.png"
import ProjCS05 from "../../Assets/projects css_05.png"
import ProjCS06 from "../../Assets/projects css_06.png"
import ProjCS07 from "../../Assets/projects css_07.png"
import ProjCS08 from "../../Assets/projects css_08.png"
import ProjCS09 from "../../Assets/projects css_09.png"
import ProjCS10 from "../../Assets/projects css_10.png"

export default function Projects() {
    return (
        <>
        <main>
            <S.Container id='main_content'>
                <h2>Meus <span>Projetos</span></h2>
                <S.CardBox aria-label='Projects Contents'>
                    <CardPJ 
                    image={ProjRC01} 
                    title={'ONU PLACEHOLDER'}
                    description={''} 
                    tech={'React, Styled-Components'}
                    live={'#'}
                    code={'#'}/>
                    <CardPJ 
                    image={ProjRC01} 
                    title={'Harry Potter API'}
                    description={'Desafio proposto pelo o #VaiNaWeb para estudo utilizando a API do Harry Potter com class function! Estilização foi livre.'} 
                    tech={'React, Styled-Components'}
                    live={'https://potterlovers.netlify.app/'}
                    code={'https://github.com/cosme7/Harry_Potter_API'}/>
                    <CardPJ 
                    image={ProjRC02} 
                    title={'Movies & Series API'}
                    description={'Desafio proposto pelo o #VaiNaWeb para estudo utilizando a API do TheMovieDB com class Component! Estilização foi livre.'} 
                    tech={'React, Styled-Components'}
                    live={'https://cosmeshows.netlify.app/'}
                    code={'https://github.com/cosme7/Shows'}/>
                    <CardPJ 
                    image={ProjRC03} 
                    title={'Calculadora'}
                    description={'Calculadora feita utilizando class Function, com botões funcionais, para mais detalhes veja o ReadME, no GitHub.'} 
                    tech={'React, Styled-Components'}
                    live={'https://cosme-calc.netlify.app/'}
                    code={'https://github.com/cosme7/Calculator'}/>
                    <CardPJ 
                    image={ProjRC04} 
                    title={'ToDo List'}
                    description={'ToDo List utilizando class Function, com a função de apagar o que foi escrito, e deletar a tarefa a qual você inseriu.'} 
                    tech={'React, Styled-Components'}
                    live={'https://todo-cosme.netlify.app/'}
                    code={'https://github.com/cosme7/ToDo_List'}/>
                    <CardPJ 
                    image={ProjCS00} 
                    title={'LOL Login Page'}
                    description={'Desafio proposto pelo o #VaiNaWeb, Js foi utilizado para manipular o botão, além da animação do input usando CSS.'} 
                    tech={'HTML, CSS e JavaScript'}
                    live={'https://github.com/cosme7/LOL_Login-Page'}
                    code={'https://cosme7.github.io/LOL_Login-Page/'}/>
                    <CardPJ 
                    image={ProjCS01} 
                    title={'FindTrend'}
                    description={'Template que utilizei para estudos de CSS e com uso pesado de CSS Grid, com uso de JavaScript para o Menu Responsivo.'} 
                    tech={'HTML, CSS e JavaScript'}
                    live={'https://cosme7.github.io/Findtrend-Webflow/'}
                    code={'https://github.com/cosme7/Findtrend-Webflow'}/>
                    <CardPJ 
                    image={ProjCS02} 
                    title={'Pineapple Island'}
                    description={'Template que utilizei para estudos de CSS aqui já tenho um uso de clip-path, e com Menu Mobile feito utilizando só CSS.'} 
                    tech={'HTML, CSS'}
                    live={'https://cosme7.github.io/Pineapple_Island/'}
                    code={'https://github.com/cosme7/Pineapple_Island'}/>
                    <CardPJ 
                    image={ProjCS03} 
                    title={'Responsive Web Page'}
                    description={'Template que utilizei para estudos de CSS, neste começo a utilizar CSS Grid, e uma boa utilização de position.'} 
                    tech={'HTML, CSS'}
                    live={'https://cosme7.github.io/Responsive_Web_Page/'}
                    code={'https://github.com/cosme7/Responsive_Web_Page'}/>
                    <CardPJ 
                    image={ProjCS04} 
                    title={'Orange'}
                    description={'Template que utilizei para estudos de CSS, neste site já teve uso mais pesado de position, e alguns usos de after & before.'} 
                    tech={'HTML, CSS'}
                    live={'https://cosme7.github.io/Orange/'}
                    code={'https://github.com/cosme7/Orange'}/>
                    <CardPJ 
                    image={ProjCS05} 
                    title={'RegiM'}
                    description={'Template que utilizei para estudos de CSS, sem muitos problemas exceto pela a ellipse azul XD.'} 
                    tech={'HTML, CSS'}
                    live={'https://cosme7.github.io/RegiM/'}
                    code={'https://github.com/cosme7/RegiM'}/>
                    <CardPJ 
                    image={ProjCS06} 
                    title={'Remindme App'}
                    description={'Template que utilizei para estudos de CSS, sem muitos problemas, nenhum uso pesado de position.'} 
                    tech={'HTML, CSS'}
                    live={'https://cosme7.github.io/Remindme_App/'}
                    code={'https://github.com/cosme7/Remindme_App'}/>
                    <CardPJ 
                    image={ProjCS07} 
                    title={'Smart Crypto'}
                    description={'Template que utilizei para estudos de CSS, média quantidade de position, e aprendi sobre blur nesse site.'} 
                    tech={'HTML, CSS'}
                    live={'https://cosme7.github.io/Smart_Crypto/'}
                    code={'https://github.com/cosme7/Smart_Crypto'}/>
                    <CardPJ 
                    image={ProjCS08} 
                    title={'Medical Genuine'}
                    description={'Template que utilizei para estudos de CSS, o site em questão não tinha versão Mobile, então pensei em uma :).'} 
                    tech={'HTML, CSS'}
                    live={'https://cosme7.github.io/Medical_Genuine/'}
                    code={'https://github.com/cosme7/Medical_Genuine'}/>
                    <CardPJ 
                    image={ProjCS09} 
                    title={'Crespos'}
                    description={'Desafio proposto pelo o #VaiNaWeb para estudo, uso pesado de position, e só tinhamos permissão de usar flexbox.'} 
                    tech={'HTML, CSS'}
                    live={'https://cosme7.github.io/Crespos/'}
                    code={'https://github.com/cosme7/Crespos'}/>
                    <CardPJ 
                    image={ProjCS10} 
                    title={'Star Wars'}
                    description={'Desafio proposto pelo o #VaiNaWeb para estudo, uso pesado de position, com animações nos cards, e button dá main.'} 
                    tech={'HTML, CSS'}
                    live={'https://cosme7.github.io/Star-Wars/'}
                    code={'https://github.com/cosme7/Star-Wars'}/>
                </S.CardBox>
                <S.Info>
                    <button aria-label='return-top'><a href='#header-box' rel="noreferrer">↑</a></button>
                </S.Info>
            </S.Container>
        </main>  
        </>
    );
}