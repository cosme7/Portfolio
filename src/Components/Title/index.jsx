import React from 'react';
import * as S from './style';

export default function Title({name, emphasize, end}) {
    return (
        <>
          <S.Title>{name} <span>{emphasize}</span> {end}</S.Title>   
        </>
    );
}