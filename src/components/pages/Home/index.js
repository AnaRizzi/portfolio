import React from 'react';
import './style.css';
import Menu from '../../Menu';
import sobre from '../../../assets/img/sobre.jpg';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <Menu />
      <div className="Home container">
        <div className="row text-center">
          <div className="col-md-6">
            <img src={sobre} className="imgSobre" alt="Ana Lucia Rizzi" />
          </div>
          <div className="col-md-6">
            <h1 className="fonteTitulo">Ana Lucia Rizzi</h1>
            <h3 className="fonteSubtitulo">Desenvolvedora back-end .NET</h3>

            <ul className="ulHome">
              <li>C#, .NET Core e .NET Framework</li>
              <li>Testes unitários (xUnit, Moq)</li>
              <li>Banco de dados relacionais (SQL Server, MySql, PostgreSQL)</li>
              <li>Banco de dados NoSQL (MongoDB)</li>
              <li>ORM (Dapper, Entity Framework)</li>
              <li>Versionamento de código (Git/GitHub/GitLab)</li>
              <li>Mensageria (RabbitMQ, Kafka)</li>
              <li>HTML, CSS, Bootstrap, Javascript</li>
            </ul>
            <br />
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
