import React from 'react';
import {NavFooter} from "../../Components/index"
import * as S from "./style";
import Linkedin from "../../Assets/footer_01.png"
import Github from "../../Assets/footer_02.png"
import Facebook from "../../Assets/footer_03.png"

export default function Footer() {

    const logo = '< CSL />'

    return (
        <>
        <footer>
            <S.Container>
                <h3>{logo}</h3>
                <NavFooter />
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