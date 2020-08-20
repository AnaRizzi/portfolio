import React from 'react';
import Menu from '../../Menu';
import './style.css';
import MyCard from '../../Card';
import niceface from '../../../assets/img/portfolio/nice_face1000x600.png'


function Portfolio() {
  return (
    <>
      <Menu />
      <div className="portfolio">
        <h1 className="text-center fonteSubtitulo">Conheça meu portfólio</h1>
        <div className="card-group">

          <div className="col-md-6 col-lg-4 containerCard CSharp">
            <MyCard src={niceface} alt="Nice Face" titulo="Sistema de gerenciamento de uma clínica estética" linguagens="C# | Asp.net | MVC | MySql" github="https://github.com/AnaRizzi">
              Sistema desenvolvido em Asp.net MVC com C# e conexão ao banco de dados MySql
            </MyCard>
          </div>

          <div className="col-md-6 col-lg-4 containerCard">
            <MyCard src={niceface} alt="Nice Face" titulo="Título do exemplo" linguagens="C# | Asp.net | MVC | MySql" github="https://github.com/AnaRizzi">
              Descrição
            </MyCard>
          </div>

          <div className="col-md-6 col-lg-4 containerCard">
            <MyCard src={niceface} alt="Nice Face" titulo="Título do exemplo" linguagens="C# | Asp.net | MVC | MySql" github="https://github.com/AnaRizzi">
              Descrição
            </MyCard>
          </div>

        </div>
      </div>
    </>
  );
}

export default Portfolio;
