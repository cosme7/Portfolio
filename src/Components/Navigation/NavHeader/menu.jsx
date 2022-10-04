import React, {useState} from 'react';
import Mobile from "./mobile"
import * as S from "./style"

export default function Menu(){

    const [open, setOpen] = useState (false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <>
        <S.Btn open={open} onClick={() => {toggleMenu()}}>
            <S.Icon open={open}></S.Icon>
            <S.Txt>Menu</S.Txt>
        </S.Btn>
        <S.MenuBG open={open}></S.MenuBG>
        <Mobile open={open} />
        </>
    );
}