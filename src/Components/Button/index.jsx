import React from 'react';
import * as S from './style'

export default function index({name, type, end}) {
    return (
        <>
            <S.Btn>{name}</S.Btn>
        </>
    );
}