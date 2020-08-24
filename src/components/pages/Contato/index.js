import React from 'react';
import './style.css';
import Menu from '../../Menu';

import github from '../../../assets/img/github.png'
import linkedin from '../../../assets/img/linkedin.png'
import email from '../../../assets/img/email.png'

function Contato() {
  return (
    <>
      <Menu/>
      <div className="contato text-center">
        <div className="conteudoContato">
          <h1 className="fonteSubtitulo">Contato</h1>
          <br/>
          <p>Entre em contato pelos links abaixo.</p>
            <div className="tipoContato">
              <h3 className="fonteSubtitulo">Email</h3>
              <a href="mailto:ana.rizzi.eu@gmail.com"><img src={email} className="imgContato" alt="email" /></a>
              <p>Envie um e-mail para ana.rizzi.eu@gmail.com que eu responderei o mais breve possível.</p>
            </div>

            <div className="tipoContato">
              <h3 className="fonteSubtitulo">Linkedin</h3>
              <a href="https://www.linkedin.com/in/analuciarizzi/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="imgContato" alt="linkedin" /></a>
              <p>Visite minha página no Linkedin para maiores informações.</p>
            </div>

            <div className="tipoContato">
              <h3 className="fonteSubtitulo">Github</h3>
              <a href="https://github.com/AnaRizzi" target="_blank" rel="noopener noreferrer"><img src={github} className="imgContato" alt="github" /></a>
              <p>Quer ver meus códigos? Acesse minha página no Github.</p>
            </div>

        </div>
      </div>
    </>
  );
}

export default Contato;
