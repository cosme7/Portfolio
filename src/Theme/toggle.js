import React from 'react'
import { func, string } from 'prop-types';
import * as S from '../Global/GlobalStyle';

export default function Toggle ({ theme, toggleTheme }){
   
    Toggle.propTypes = {
        theme: string.isRequired,
        toggleTheme: func.isRequired,
    }

  return (

    <S.Btn onClick={() => {toggleTheme()}} aria-label='Toogle Theme Menu'></S.Btn>
  );
};

