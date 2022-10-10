import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as S from "./style"


export default function Form() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_86m6ddd', 'template_4oh8y2l', 
                        form.current, 'kAE5QmY-TSWdHjsZa')

        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
         <S.Form ref={form} onSubmit={sendEmail}>
            <label htmlFor='name'>Nome:</label>
            <input id='name' type="text" name="user_name" placeholder='Nome'/>
            <label htmlFor='email'>E-mail:</label>
            <input id='email' type="email" name="user_email" placeholder='examplo@gmail.com'/>
            <label htmlFor='questions'>Assunto:</label>
            <textarea id="questions" name="message" cols="30" rows="5" placeholder='EIIIII!'/>
            <input type="submit" value="Enviar" />
        </S.Form>
        </>
    );
}