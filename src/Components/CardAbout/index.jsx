import React from 'react';
import infoAbout from './info'
import * as S from "./style";

export default function CardAbout(){
    return (
        <>
            {infoAbout.map((item, index) => (
                <S.Card_About key={index}>
                    <img src={item.img} alt={item.title} title={item.title}/>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </S.Card_About>
            ))}
        </>
    );
}