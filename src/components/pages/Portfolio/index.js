import React from 'react';
import Menu from '../../Menu';
import './style.css';
import MyCard from '../../Card';
import niceface from '../../../assets/img/portfolio/nice_face1000x600.png'
import portfolio from '../../../assets/img/portfolio/portfolio1000x600.png'
import anabnb from '../../../assets/img/portfolio/anabnb1000x600.png'
import docesrizzi from '../../../assets/img/portfolio/docesrizzi1000x600.png'
import hannah from '../../../assets/img/portfolio/hannah1000x600.png'
import cep from '../../../assets/img/portfolio/cep1000x600.png'
import rabbit from '../../../assets/img/portfolio/rabbit1000x600.png'
import receitas from '../../../assets/img/portfolio/receitas1000x600.png'
import bancos from '../../../assets/img/portfolio/bancos1000x600.png'


function Portfolio() {
  return (
    <>
      <Menu />
      <div className="portfolio">
        <h1 className="text-center fonteSubtitulo">Conheça meu portfólio</h1>
        <div className="card-group">


          <div className="col-md-6 col-lg-4 containerCard CSharp MySql">
            <MyCard src={receitas} alt="Receitas Surpresas"
              titulo="API para site de receitas"
              linguagens="C# | .NET Core | API | MySql"
              github="https://github.com/AnaRizzi/API_Receita_Surpresa"
            >
              Foi desenvolvida uma API com conexão ao MySql que retorna uma receita surpresa, podendo ser doce, salgada ou geral.
              <br />
              Para utilizar essa API, foi criado um site em HTML, CSS e Javascript que exibe a receita trazida pela API.
              <br /><br />
              Veja o código do site <a href="https://github.com/AnaRizzi/Site_Receita_Surpresa" target="_blank" rel="noopener noreferrer">clicando aqui.</a>
            </MyCard>
          </div>


          < div className="col-md-6 col-lg-4 containerCard CSharp MySql">
            <MyCard src={bancos} alt="Bancos de dados"
              titulo="API para testar banco de dados"
              linguagens="C# | MySql | PostgreSql | MongoDB"
              github="https://github.com/AnaRizzi/API_Receita_Surpresa"
            >
              API que conecta ao MySql usando Entity Framework, ao PostgreSql usando Dapper e ao MongoDB.
              <br />
              Foram utilizados três bancos diferentes na mesma API para fins de estudos.
            </MyCard>
          </div>


          <div className="col-md-6 col-lg-4 containerCard CSharp Rabbit">
            <MyCard src={rabbit} alt="RabbitMQ"
              titulo="Worker com conexão ao RabbitMQ"
              linguagens="C# | .NET Core | Worker | RabbitMQ"
              github="https://github.com/AnaRizzi/RabbitMQ"
            >
              Worker criado em .NET com C# e conexão com o serviço de mensageria RabbitMQ.
              <br />
              Projeto criado para fins de estudo, consome uma mensagem de uma fila e publica outra mensagem em outra fila do Rabbit.
            </MyCard>
          </div>


          <div className="col-md-6 col-lg-4 containerCard CSharp MySql">
            <MyCard src={niceface} alt="Nice Face"
              titulo="Sistema de gerenciamento de uma clínica estética"
              linguagens="C# | Asp.net | MVC | MySql"
              github="https://github.com/developmentg6/SistemaMVC_Clinica"
            >
              Sistema desenvolvido em Asp.net MVC com C# e conexão ao banco de dados MySql.
              <br />
              Nele, a clínica estética pode cadastrar, consultar, editar e excluir clientes, funcionários, procedimentos e agendamentos.
              <br /><br />
              Veja uma demostração do sistema <a href="https://www.youtube.com/watch?v=PUyviW2X2vM" target="_blank" rel="noopener noreferrer">clicando aqui.</a>
            </MyCard>

          </div>

          <div className="col-md-6 col-lg-4 containerCard React Html">
            <MyCard src={portfolio} alt="Portfólio"
              titulo="Site para portfólio"
              linguagens="React | HTML | CSS | Javascript"
              github="https://github.com/AnaRizzi/portfolio"
            >
              Este site foi desenvolvido em React no formato SPA para abrigar o meu portfólio.
              <br />
              A ideia deste site foi mostrar um pouco dos meus conhecimentos e da minha história, além de ser um incentivo para estudar outras tecnologias, como o React.
            </MyCard>
          </div>

          <div className="col-md-6 col-lg-4 containerCard CSharp">
            <MyCard src={cep} alt="Busca de Cep"
              titulo="Busca de Cep nos correios"
              linguagens="C# | Asp.net | MVC"
              github="https://github.com/AnaRizzi/buscaCep"
            >
              Página desenvolvida em Asp.net MVC com C# que utiliza a Web Service dos Correios para fazer busca de Cep.
              <br />
              Basta digitar o Cep e clicar no botão que a página traz o endereço completo ou avisa se o cep não foi encontrado.
            </MyCard>
          </div>

          <div className="col-md-6 col-lg-4 containerCard CSharp SqlServer">
            <MyCard src={docesrizzi} alt="Doces Rizzi"
              titulo="Sistema de gerenciamento para loja de doces"
              linguagens="C# | Windows Forms | SQL Server"
              github="https://github.com/AnaRizzi/LojaDocesRizzi"
            >
              Sistema desenvolvido em Windows Forms com C# e conexão ao banco de dados SQL Server.
              <br />
              Nele, a loja de doces pode cadastrar, consultar, editar e excluir clientes, produtos e pedidos.
              <br /><br />
              Veja uma demostração do sistema <a href="https://www.youtube.com/watch?v=Zejkhf0R_nA" target="_blank" rel="noopener noreferrer">clicando aqui.</a>
            </MyCard>
          </div>

          <div className="col-md-6 col-lg-4 containerCard Html Javascript">
            <MyCard src={anabnb} alt="AnaBnb"
              titulo="Site de aluguel de hospedagem"
              linguagens="HTML | CSS | Javascript | Bootstrap"
              github="https://github.com/AnaRizzi/HiringCoders_DesafioAirbnb"
            >
              Site desenvolvido em HTML, CSS e Javascript com consumo de API como desafio para criar uma versão do site Airbnb.
              <br />
              Nesse site, o usuário pode ver as acomodações disponíveis, filtrar por preço ou tipo e favoritar as acomodações.
              <br /><br />
              Veja o funcionamento do site <a href="https://anabnb.netlify.app/" target="_blank" rel="noopener noreferrer">clicando aqui.</a>
            </MyCard>
          </div>

          <div className="col-md-6 col-lg-4 containerCard Javascript">
            <MyCard src={hannah} alt="A Bruxinha Hannah"
              titulo="Jogo da bruxinha Hannah"
              linguagens="Javascript | P5.js"
              github="https://github.com/AnaRizzi/game_Hannah"
            >
              Jogo desenvolvido na plataforma P5js utilizando javascript.
              <br />
              As imagens e sons foram retirados da internet para fins didáticos.
              <br /><br />
              Veja o funcionamento do jogo <a href="https://anarizzi.github.io/game_Hannah/" target="_blank" rel="noopener noreferrer">clicando aqui.</a>
            </MyCard>
          </div>


        </div>
      </div>
    </>
  );


}


export default Portfolio;
