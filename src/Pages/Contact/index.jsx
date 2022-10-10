import React from 'react';
import Form from '../../Components/Form';
import Title from "../../Components/Title"
import * as S from "./style"

export default function Contact() {

    return (
        <>
        <main>
            <S.Container id='main_content'>
                <Title name={'Vamos '} emphasize={'Conversar!'}/>  
                <p>Se você estiver interessado no meu trabalho 
                    ou tiver alguma dúvida, não hesite em me escrever!</p>
                <Form />
            </S.Container>
        </main>
        </>
    );
}