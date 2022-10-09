import React from 'react';
import * as S from "./style";

export default function CardAbout({image, title, description}){
    return (
        <>
            <S.Card_About>
                <img src={image} alt={title} title={title}/>
                <h3>{title}</h3>
                <p>{description}</p>
            </S.Card_About>
        </>
    );
}