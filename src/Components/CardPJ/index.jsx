import React from 'react';
import data from './info';
import * as S from "./style";

export default function CardPJ() {

    return (
        <>
        {data.map ((item, index) => (
            <S.Card key={index}>
                <img src={item.img} alt={item.title} title={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Tech's: <span>{item.tech}</span></p>
                <S.BtnBox>
                    <button><a href={item.live} target="_blank" rel="noreferrer">Live Site →</a></button>
                    <button><a href={item.code} target="_blank" rel="noreferrer">GitHub →</a></button>
                </S.BtnBox>
            </S.Card>
        ))}
        </>
    );
}
