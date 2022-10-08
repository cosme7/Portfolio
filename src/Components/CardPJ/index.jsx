import React from 'react';
import * as S from "./style";

export default function CardPJ({image, title, description, tech, live, code}) {
    return (
        <>
            <S.Card>
                <img src={image} alt={title} title={title}/>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Tech's: <span>{tech}</span></p>
                <S.BtnBox>
                    <button aria-labelledby='live-site'><a href={live} target="_blank" rel="noreferrer">Live Site →</a></button>
                    <button aria-labelledby='site-code'><a href={code} target="_blank" rel="noreferrer">GitHub →</a></button>
                </S.BtnBox>
            </S.Card>
        </>
    );
}