import React, {useState, useEffect, useRef} from 'react';
import Mobile from "./mobile"
import * as S from "./style"

export default function Menu(){

    const [open, setOpen] = useState (true)
    const btnRef = useRef()

    const toggleMenu = () => {
        setOpen(!open)
    }

    useEffect (() => {

        const closeMenu = e => {
            if(e.path[0] !== btnRef.current){
                console.log(e)
              setOpen(false)
            }
          };

          document.body.addEventListener('click', closeMenu);
          return () => document.body.removeEventListener('click', closeMenu);
    }, [open]);

    return (
        <>
        <S.Btn open={open} onClick={() => {toggleMenu()}}>
            <S.Icon open={open} ref={btnRef}></S.Icon>
            <S.Txt>Menu</S.Txt>
        </S.Btn>
        <S.MenuBG open={open}></S.MenuBG>
        <Mobile open={open} />
        </>
    );
}