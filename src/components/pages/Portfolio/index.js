import React from 'react';
import Menu from '../../Menu';
import './style.css';
import MyCard from '../../Card';
import niceface from '../../../assets/img/portfolio/nice_face1000x600.png'
import portfolio from '../../../assets/img/portfolio/portfolio1000x600.png'
import anabnb from '../../../assets/img/portfolio/anabnb1000x600.png'
import docesrizzi from '../../../assets/img/portfolio/docesrizzi1000x600.png'
import hannah from '../../../assets/img/portfolio/hannah1000x600.png'
import pokestore from '../../../assets/img/portfolio/pokestore1000x600.png'
import covid from '../../../assets/img/portfolio/sitecovid1000x600.png'
import cep from '../../../assets/img/portfolio/cep1000x600.png'


function Portfolio() {
  return (
    <>
      <Menu />
      <div className="portfolio">
        <h1 className="text-center fonteSubtitulo">Conheça meu portfólio</h1>
        <div className="card-group">

          <div className="col-md-6 col-lg-4 containerCard CSharp MySql">
            <MyCard src={niceface} alt="Nice Face" 
            titulo="Sistema de gerenciamento de uma clínica estética" 
            linguagens="C# | Asp.net | MVC | MySql" 
            github="https://github.com/developmentg6/SistemaMVC_Clinica">
              Sistema desenvolvido em Asp.net MVC com C# e conexão ao banco de dados MySql.
            </MyCard>
          </div>

          <div className="col-md-6 col-lg-4 containerCard React Html">
            <MyCard src={portfolio} alt="Portfólio" 
            titulo="Site para portfólio" 
            linguagens="React | HTML | CSS | Javascript" 
            github="https://github.com/AnaRizzi/portfolio">
              Este site foi desenvolvido em React para abrigar o meu portfólio.
            </MyCard>
          </div> 

          <div className="col-md-6 col-lg-4 containerCard CSharp">
            <MyCard src={cep} alt="Busca de Cep" 
            titulo="Busca de Cep nos correios" 
            linguagens="C# | Asp.net | MVC" 
            github="https://github.com/AnaRizzi/buscaCep">
              Página desenvolvida em Asp.net MVC com C# que utiliza a Web Service dos Correios para fazer busca de Cep.
            </MyCard>
          </div> 

          <div className="col-md-6 col-lg-4 containerCard CSharp SqlServer">
            <MyCard src={docesrizzi} alt="Doces Rizzi" 
            titulo="Sistema de gerenciamento para loja de doces" 
            linguagens="C# | Windows Forms | SQL Server" 
            github="https://github.com/AnaRizzi/LojaDocesRizzi">
              Sistema desenvolvido em Windows Forms com C# e conexão ao banco de dados SQL Server.
            </MyCard>
          </div> 
          
          <div className="col-md-6 col-lg-4 containerCard Html Javascript">
            <MyCard src={anabnb} alt="AnaBnb" 
            titulo="Site de aluguel de hospedagem" 
            linguagens="HTML | CSS | Javascript | Bootstrap" 
            github="https://github.com/AnaRizzi/HiringCoders_DesafioAirbnb">
              Site desenvolvido em HTML, CSS e Javascript com consumo de API como desafio para criar uma versão do site Airbnb.
            </MyCard>
          </div> 
          
          <div className="col-md-6 col-lg-4 containerCard Javascript">
            <MyCard src={hannah} alt="A Bruxinha Hannah" 
            titulo="Jogo da bruxinha Hannah" 
            linguagens="Javascript | P5.js" 
            github="https://github.com/AnaRizzi/game_Hannah">
              Jogo desenvolvido na plataforma P5js utilizando javascript.
            </MyCard>
          </div> 
          
          <div className="col-md-6 col-lg-4 containerCard Html">
            <MyCard src={covid} alt="Covid" 
            titulo="Site de notícias" 
            linguagens="HTML | CSS" 
            github="https://github.com/AnaRizzi/HiringCoders_DesafioCovid">
              Site com notícias sobre o Covid desenvolvido apenas com HTML e CSS.
            </MyCard>
          </div> 
          
          <div className="col-md-6 col-lg-4 containerCard Html Javascript">
            <MyCard src={pokestore} alt="Pokestore" 
            titulo="Site de pokestore" 
            linguagens="HTML | CSS | Javascript | Bootstrap" 
            github="https://github.com/AnaRizzi/HiringCoders_Pokestore">
              Site desenvolvido em HTML e Javascript com consumo de API para imitar uma loja de Pokemons.
            </MyCard>
          </div> 

        </div>
      </div>
    </>
  );
}

export default Portfolio;
