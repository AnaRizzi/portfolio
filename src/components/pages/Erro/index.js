import React from 'react';
import './style.css';
import Menu from '../../Menu';
import imgErro from '../../../assets/img/erro.jpg'
import { Link } from 'react-router-dom';

function Erro() {
  return (
    <>
      <Menu/>
      <div className="erro text-center">
        <h1 className="fonteSubtitulo">Página não encontrada!</h1>

        <img src={imgErro} className="imgErro" alt="404" />

        <div className="erroTelaGrande">
          <br/>
          <p>Mas não fique triste, divirta-se um pouco com a bruxinha Hannah nesse jogo desenvolvido em Javascript. Basta pressionar a tecla para cima para fazer a personagem pular.</p>
          <iframe src="https://anarizzi.github.io/game_Hannah/" width="600px" height="400px" title="Game Hannah"></iframe>
        </div>
        <br/>
        <Link to="/" className="btn btn-primary">Voltar para Home</Link>
      </div>
    </>
  );
}

export default Erro;
