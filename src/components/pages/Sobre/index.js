import React from 'react';
import Menu from '../../Menu';
import './style.css';

function Sobre() {
  return (
    <>
      <Menu/>
      <div className="sobre container">
        <div className="textoSobre text-center">
            <h1 className="fonteSubtitulo">Conheça um pouco mais sobre mim</h1>
            <br/>
            <h1 className="fonteTitulo">Ana Lucia Rizzi</h1>
            <h3 className="fonteSubtitulo">Desenvolvedora back-end em início de carreira</h3>
            <br/>


            <div className="text-justify">
              <h4 className="fonteSubtitulo">Minha História:</h4>
              <p>Comecei a estudar programação no começo de 2019 com alguns cursos online. Gostei tanto que, no meio de 2019, iniciei o curso técnico de Desenvolvimento de Sistemas, onde descobri minha paixão pelo código e pelo back-end.</p>
              <p>Mas minha história não começou aí...</p>
              <p>Sou formada em Letras com pós-graduação em MBA Book Publishing e trabalhei durante muito tempo em editoras, com tradução e revisão de textos. Porém, devido à crise das editoras e a outras decisões pessoais, senti que era hora de me reinventar e decidi dedicar meu tempo a uma paixão antiga: a tecnologia.</p>
              <p>Assim, iniciei o processo de transição de carreira para a área de desenvolvimento. Por mais difícil que seja, me sinto realizada com essa mudança e sei que tenho muito a oferecer à área, principalmente levando em conta minha bagagem anterior, pois essa mistura de habilidades e de conhecimentos, junto à facilidade e à vontade de aprender, só tem a contribuir para ter novos olhares e encontrar soluções eficientes para os problemas que surgem. </p>

              <br/>
              <h4 className="fonteSubtitulo">Formação:</h4>
              <ul className="ulFormacao">
                <li>07/2019 - 12/2020 <br/> Técnico em Desenvolvimento de Sistemas <br/> Etec Prof. Basilides de Godoy</li>
                <li>02/2018 - 02/2020 <br/> Pós-graduação lato sensu – MBA Book Publishing <br/> LabPub Serviços Educacionais</li>
                <li>02/2007 - 12/2011 <br/>  Graduação em Letras (Italiano/Português) <br/> Faculdade de Filosofia, Letras e Ciências Humanas - Universidade de São Paulo</li>
              </ul>

              <br/>
              <h4 className="fonteSubtitulo">Experiência:</h4>
              <p>Sei que este é o tópico considerado mais importante para 90% dos recrutadores, mas sinto desapontá-los: eu ainda não possuo experiência na área.</p>
              <p>Ainda assim, possuo experiência em outras áreas (trabalhei 7 anos em editoras), possuo experiência em desenvolver projetos para estudos, possuo experiência em correr atrás do que eu não sei e pesquisar até entender e conseguir fazer, porém, quanto à experiência de trabalho comprovada na área de desenvolvimento, eu espero conseguir muito em breve, mas até o momento, podem contar com a minha boa vontade, a minha disposição em aprender e a certeza de que sempre me esforçarei ao máximo para provar que eu mereço estar aqui. </p>


            </div>
          </div>
        </div>

    </>
  );
}

export default Sobre;
