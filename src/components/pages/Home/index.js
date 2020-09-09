import React from 'react';
import './style.css';
import Menu from '../../Menu';
import sobre from '../../../assets/img/sobre.jpg';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <Menu/>
      <div className="Home container">
        <div className="row text-center">
          <div className="col-md-6">
            <img src={sobre} className="imgSobre" alt="Ana Lucia Rizzi"/>
          </div>
          <div className="col-md-6">
            <h1 className="fonteTitulo">Ana Lucia Rizzi</h1>
            <h3 className="fonteSubtitulo">Desenvolvedora back-end Jr.</h3>

            <ul className="ulHome">
              <li>C# e Asp.net MVC</li>
              <li>Conhecimentos em Javascript e Node.js</li>
              <li>Conhecimentos em versionamento (Git/GitHub)</li>
              <li>HTML, CSS e Bootstrap</li>
              <li>Conhecimentos em banco de dados (SQL Server e MySql)</li>
              <li>Noções de React</li>
            </ul>
            <br/>
            <p>Conheça mais <Link to="/sobre" className="linkHome">sobre mim</Link>
            , veja <Link to="/portfolio" className="linkHome">meu portfólio
            </Link> e <Link to="/contato" className="linkHome">entre em contato</Link>!</p>

          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
