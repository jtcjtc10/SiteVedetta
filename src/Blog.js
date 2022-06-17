
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  navbar  from './cabecalho';
import "../node_modules/video-react/dist/video-react.css";
import App from './whatzap.js';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
import rodape from './rodape.js';
import Blog_background_auto_x2_auto_x2jpg from './img/Blog_background_auto_x2_auto_x2.jpg';
import Link_b from './img/link_b1.jpg';
import Link_b2 from './img/link_b2.jpg';
import Artigo from  './Artigo1';

import { Link } from 'react-router-dom';
export const Blog = () => {
  const storeId = "storeId";
  var mensagem="Os dados pessoais são de extrema relevância na era digital e do Big Data. Já foram considerados o “novo petróleo”, ou DATA IS THE NEW OIL” - HUMBY, clive 2006.  Os dados de titulares são coletados o tempo todo on-line e off-line e as pessoas, antes da vigência da Lei Geral de Proteção de Dados (LGPD), não tinham noção dessa quantidade de dados que as empresas mantinham em seus arquivos, digitais ou não, e muito menos garantias do que seria feito desses dados. Esse cenário mudou completamente após a vigência dessa recente lei brasileira. Por outro lado, as empresas também não detinham a técnica da governança desses dados, pois não havia norma que regulasse ou orientasse as empresas com relação ao cuidado necessário para que eles não fossem utilizados de forma inapropriada, ou como deveriam proceder a ataque de hacker, caso houvesse, ou vazamentos, podendo acarretar inúmeras responsabilidades extrajudiciais e judiciais para as empresas.";
  var mensagem2="Muitas empresas, principalmente, as de pequeno e médio porte, ainda possuem a visão negativa da LGPD. Mas essa visão é injusta e falsa. Na verdade, investir em implementação da LGPD é um investimento necessário e uma grande oportunidade para a empresa no sentido de competitividade, confiança, credibilidade, inovação e tecnologia. "
  useEffect(() => {

    return () => {
    };
  }, []);
 const Saiba = () =>{
   return(
  <Link  to="/Artigo2"  className="botao_saiba">
                    Saiba Mais
  </Link> 
   );
 }
 const Saiba2 = () =>{
  return(
 <Link  to="/Artigo3"  className="botao_saiba">
                   Saiba Mais
 </Link> 
  );
}
  return (
    <div className="App principal section" date-anime="up" Style={"margin-top: 100px;"}>
       { Cabecalho()} 
      <Helmet>
                <script src="./script.js"></script>

      </Helmet>
        <div data-anime="up" Style="background: url(/static/media/Blog_background_auto_x2_auto_x2.efc1280e312386107bfd.jpg);    padding-bottom: 180px;
    padding-top: 180px; background-size:cover;    margin-top: 216px;"  >
        {Artigo(Link_b,mensagem,Saiba)}
        <div Style="margin-top: 40px;"></div>
           <div className="bulding_conteiner" Style="display: inline-flex;border: solid 1px black;background-color: white;/* padding: 0px; *//* padding-bottom: 40px; */margin-top: 0px;border-radius: 30px;width: 90%;margin: 10px;background-image: url('./img/link_b2.jpg');/* margin-bottom: -90px; */background-position: left;background-repeat: no-repeat;background-size: 40% 100%;"><div className="link_descricao"><p Style="text-align: right;display: block;right: auto;left: 10px;color: black;margin-left: 45%;font-size: 66%;width: 50%;">A IMPORTÂNCIA DOS DADOS PESSOAIS E A LEI GERAL DE PROTEÇÃO DE DADOS (LGPD)Muitas empresas, principalmente, as de pequeno e m      dio porte, ainda possuem a vis      o negativa da LGPD. Mas essa vis      o        injusta e falsa. Na verdade, investir em ementa            o da LGPD        um investimento necess      rio e uma grande oportunidade para a empresa no sentido de competitividade, confian      a, credibilidade, inova            o e tecnologia. </p></div><a className="botao_saiba" href="/Biblioteca/https://grupovedetta.blogspot.com/2022/01/lei-geral-de-protecao-de-dados-lgpd-um.html">Saiba Mais</a></div>
        </div>

      <footer >
      { rodape()}
      {App()}
      </footer>
    </div>
     );
}




function Cabecalho() 
{
  return (
   <header>
        
     <nav> {navbar()}</nav>
  
 
   </header>
  );
}

