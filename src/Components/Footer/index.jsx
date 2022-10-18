import React from 'react';
import Nav from "./navigation"
import * as S from "./style";
import Logo from '../../Assets/logo.png'
import Linkedin from "../../Assets/footer_01.png"
import Github from "../../Assets/footer_02.png"
import Facebook from "../../Assets/footer_03.png"

export default function Footer() {

    return (
        <>
        <footer>
            <S.Container>
                <img src={Logo} alt="Logo" />
                <Nav />
                <S.Social aria-label='social navigation'>
                    <a href="https://www.linkedin.com/in/cosme-da-silva-leite-08baa3219/" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="LinkeDin" title="LinkeDin" />
                    </a>
                    <a href="https://github.com/cosme7" target="_blank" rel="noreferrer">
                        <img src={Github} alt="GitHub" title="GitHub" />
                    </a>
                    <a href="https://www.facebook.com/cosmewr" target="_blank" rel="noreferrer">
                        <img src={Facebook} alt="Facebook" title="Facebook" />
                    </a>
                </S.Social>
                <p>Obrigado por sua visita!</p>
            </S.Container>
        </footer>
        </>
    );
}