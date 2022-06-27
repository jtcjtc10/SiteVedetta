import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, UncontrolledCarousel } from 'reactstrap';
import Cards from './cardT.js';
import  navbar  from './cabecalho';
import "../node_modules/video-react/dist/video-react.css";
import { CardGroup } from 'reactstrap';
import React, { useState } from 'react';
import { Player } from 'video-react';
import YoutubeEmbed from "./YoutubeEmbed.js";
import  video_teste  from './video/video.mp4'
import  imagem_video  from  './img/imagem_video.png'
import Typography from '@material-ui/core/Typography';
import { OffcanvasHeader } from 'reactstrap';
import { OffcanvasBody } from 'reactstrap';
import { Button } from 'reactstrap';
import { Collapse } from 'reactstrap';
import { Card } from 'reactstrap';
import { CardBody } from 'reactstrap';
import { UncontrolledCollapse } from 'reactstrap';
import Formulario from './form.js'; 
import App from './whatzap.js';
import Cardflip from './Card-flip.js';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
import scriptjs from './script.js';
import rodape from './rodape.js';
import SimpleSlider from './card-multi.js'
import wallpaper_3 from './img/wallpaper_3_auto_x2_auto_x2.jpg'
import wallpaper_2 from './img/background_1_auto_x2_auto_x2.jpg'
import wallpaper_1 from './img/wallpaper.jpg'
import border_1 from './img/border_1.png';
import {Formulario_leads} from './leads_form.js';
import Link_b from './img/link_b1.jpg';
import Link_b2 from './img/link_b2.jpg';
import Artigo from  './Artigo1';
import { Link } from 'react-router-dom';


function display_filtro(textox){
  let texto = textox;
 console.log('função display ativada' . texto);

   
   let Artigos;
   let Podcast;
   let Videos;
   let styleprops='display:block;margin-top: 0px;background-color: rgb(255 255 255 / 60%);margin-left: auto;margin-right: auto;margin-top: 10%';
   let styleprops2='display:block;margin-top: 0px;background-color: rgb(255 255 255 / 60%);margin-left: auto;margin-right: auto;margin-top: 7%';
   let styleprops3='display:block;margin-top: 0px;background-color: rgb(255 255 255 / 60%);margin-left: auto;margin-right: auto;margin-top: 4%';
  
  Artigos = document.getElementsByClassName('Artigo_opcao')[0];
  Podcast = document.getElementsByClassName('Podcast_opcao')[0];
  Videos = document.getElementsByClassName('Videos_opcao')[0];
  if(texto == 'Artigos'){

    Videos.style='transition-duration:400ms;opacity:0;visibility:hidden;position:absolute;top:0;    transform: translate3d(0px, 0px, 0px);';
    Podcast.style='transition-duration:400ms;opacity:0;visibility:hidden;position:absolute;top:0';
    Artigos.style=styleprops;
    Artigos.classList.add('animate');
    Podcast.classList.remove('animate');
    Videos.classList.remove('animate');

  }else if(texto == 'Videos'){
    console.log('Videos');
    Videos.style=styleprops3;
    Podcast.style='transition-duration:400ms;opacity:0;visibility:hidden;position:absolute;top:0';
    Artigos.style='transition-duration:400ms;opacity:0;visibility:hidden;position:absolute;top:0';
    Artigos.classList.remove('animate');
    Podcast.classList.remove('animate');
    Videos.classList.add('animate');
  }else if(texto == 'Podcast'){
    
    Videos.style='display:none';
    Podcast.style=styleprops2;
    Artigos.style='display:none';
    Artigos.classList.remove('animate')
    Podcast.classList.add('animate')
    Videos.classList.remove('animate')
  }



}


export const Biblioteca = () => {
  const storeId = "storeId";


 const Saiba = () =>{
   return(
  <Link  to="https://grupovedetta.blogspot.com/2022/01/a-importancia-dos-dados-pessoais-e-lei.html"  className="botao_saiba">
                    Saiba Mais
  </Link>
   );
 }
 const Saiba2 = () =>{
  return(
 <Link  to="https://grupovedetta.blogspot.com/2022/01/lei-geral-de-protecao-de-dados-lgpd-um.html"  className="botao_saiba">
                   Saiba Mais
 </Link>
   );
} 
  useEffect(() => {

    return () => {
    };
  }, []);
  const [loaded, setLoaded] = useState(false);
  function handleLoad() {
    var mensagemarray = mensagemarray = document.getElementsByClassName('textoblog');
    var mensagem2 = mensagem2=document.getElementsByClassName('textoblog'); 
    var avatar = document.getElementById("avatarPreview");
    avatar.setAttribute("src","https://1.bp.blogspot.com/-5cTUMBumKL4/YgZ4X5dNJnI/AAAAAAAAADs/jWycdT2EJ28i3aCUsTILFNMlrK7m_xrrACK4BGAYYCw/s35/Vedetta-Logomarca_Prancheta%25252B1.png");
    var avatar1 = document.querySelector("#avatarPreview");
avatar.setAttribute("src","https://1.bp.blogspot.com/-5cTUMBumKL4/YgZ4X5dNJnI/AAAAAAAAADs/jWycdT2EJ28i3aCUsTILFNMlrK7m_xrrACK4BGAYYCw/s35/Vedetta-Logomarca_Prancheta%25252B1.png");
    var x = 0;
    
    mensagemarray = mensagemarray.length;
      mensagemarray = mensagemarray - 1;
        for(x=0;x<mensagemarray;x++){
          mensagem2[x].textContent = mensagem2[x].textContent.slice(0,361);
         
  
    
        }
    
        setLoaded(true);
    }
  return (
    <div onLoad={handleLoad} className="App" date-anime="up">
       { Cabecalho()} 
      
     
      <header className="App-header principal section"Style={"margin-top:200px"} >
     

     
      <Container  data-anime="up"    Style='    margin-top: 0px;
    background-color: rgb(255 255 255 / 60%);
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%

    '>    

    <div id="leftX" Style="display: block;justify-content: left; margin-bottom: -70%;"><div Style="Float:left;">Filtro </div><br></br><ul Style="float: left;
    display: flex;
    font-size: 85%;"><li Style="
    margin-right: 10%;">
      <div  className='hover_blue' onClick={() => display_filtro('Artigos')} Style="cursor: grab;display:inline-block;text-decoration: none;margin-right: 5px;">Artigos</div></li><li Style="
    margin-right: 10%;">
<div onClick={ ()=> display_filtro('Podcast')}className='hover_blue'  Style="cursor: grab;display:inline-block;text-decoration: none;margin-right: 5px;">Podcast</div></li><li Style="
      margin-right: 10%;"><div onClick={() => display_filtro('Videos')} className='hover_blue' Style="cursor: grab;display:inline-block;text-decoration: none;margin-right: 5px;">Vídeos</div></li><li Style="
    margin-right: 10%;">
<a href="#LeisY"className='hover_blue'  Style="cursor: grab;display:inline-block;text-decoration: none;margin-right: 5px;">Leis</a></li></ul></div>

 </Container> 
 <br></br>
 <div id='ArtigoY' ></div>
      <Container  className='Artigo_opcao'   Style='    margin-top: 0px;
    background-color: rgb(255 255 255 / 60%);
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%

    '>    
    <div id="leftX"> Artigos 
    </div>
    <iframe onLoad={handleLoad} width="100%" height="818vm" src="https://grupovedetta.blogspot.com/search/label/Postagens"></iframe>

 </Container>  
 <br></br>
 <div id='PodcastY'></div>
 <Container  className='Podcast_opcao'   Style='    margin-top: 0px;
    background-color: rgb(255 255 255 / 60%);
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%
    '>    
    <div id="leftX"> Podcasts
    </div>
    <iframe onLoad={handleLoad} width="100%" height="818vm" src="https://grupovedetta.blogspot.com/search/label/Podcasts"></iframe>

 </Container> 
 <br></br>
 <div id="VídeosY"></div>
 <Container  className='Videos_opcao'   Style='    margin-top: 0px;
    background-color: rgb(255 255 255 / 60%);
    margin-left: auto;
    margin-right: auto;
    margin-top: -15%
    '>    
    <div id="leftX"> Videos
    </div>
    <iframe onLoad={handleLoad} width="100%" height="818vm" src="https://grupovedetta.blogspot.com/search/label/V%C3%ADdeo"></iframe>

 </Container>  


 <p Style='width:100%'>
 <Container  data-anime="up"     Style='
    
    margin-left: auto;
    margin-right: auto; 
    background-color: rgb(119 158 175);'>    
      
        {Formulario_leads()}

        </Container> 
  </p>
  <br></br>
  <div id="LeisY" Style="    margin-top: 200px;"></div>
  <div id="leftX" Style="   margin-top: 250px; "> Leis</div>
        <div data-anime="up" Style="background-color: rgb(238 238 238 / 60%); margin-left: auto; margin-right: auto;    height: 500px;overflow-y: auto;margin-bottom: 20px;" className="container animate">

<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
UTILIDADE PÚBLICA – LEI GERAL DE PROTEÇÃO DE DADOS DE PESSOAS NATURAIS
</p>
<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
Denúncia de descumprimento da LGPD

<a target='_blank' href="https://www.gov.br/anpd/pt-br/assuntos/denuncia-de-descumprimento-da-lgpd" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br/assuntos/denuncia-de-descumprimento-da-lgpd
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>

<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
Petição de titular: sistema de peticionamento  peticionamento da  ANPD
<a target='_blank' href="https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao-titular-de-dados/peticao-de-titular-contra-controlador-de-dados" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao-titular-de-dados/peticao-de-titular-contra-controlador-de-dados
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>
<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
ANPD – Autoridade Nacional de Proteção de Dados


<a target='_blank' href="https://www.gov.br/anpd/pt-br" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>
<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
A  Lei Geral De Proteção de Dados decorre dos Princípios da Constituição Federal de 1998 
<a target='_blank' href="http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>

<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
LEIS IMPORTANTES
</p>
<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
Antes de a LGPD – lei geral de proteção de dados - ser aprovada no Brasil, o Marco Civil da Internet já trazia avanços nesta seara 
</p>
<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
Marco Civil da Internet -  lei nº 12.965, de 23 de abril de 2014 estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil.

<a target='_blank' href="http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>
<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
Lei  Geral de Proteção de dados LGPD - lei nº 13.709, de 14 de agosto de 2018 

<a target='_blank' href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>

<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
A LGPD levará em conta as demais leis como o Código Civil – determina ilícito civil e todas as normas que regem as relações civil  no Brasil

lei n o 10.406, de 10 de janeiro de 2002 


<a target='_blank' href="http://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
http://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>


<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
A LGPD LEVARÁ EM CONTA AS DEMAIS LEIS COMO O CDC – CÓDIGO DE DEFESA DO CONSUMIDOR  Lei 8078/90




<a target='_blank' href="http://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
http://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>


<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
A LGPD – LEI BRASILEIRA DE PROTEÇÃO GERAL DE DADOS  FOI INSPIRADA NA GDPR, LEI EUROPEIA DE PROTEÇÃO DE DADOS




<a target='_blank' href="https://gdprinfo.eu/pt-pt" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://gdprinfo.eu/pt-pt
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>
<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
ANPD – AUTORIDADE NACIONAL DE PROTEÇÃO DE DADOS



<a target='_blank' href="https://www.gov.br/anpd/pt-br" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>


<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
No Dia Internacional da Proteção de Dados, ANPD publica Guia Orientativo sobre Tratamento de Dados Pessoais pelo Poder Público:




<a target='_blank' href="https://www.gov.br/anpd/pt-br/assuntos/noticias/no-dia-internacional-da-protecao-de-dados-anpd-publica-guia-orientativo-sobre-tratamento-de-dados-pessoais-pelo-poder-publico" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br/assuntos/noticias/no-dia-internacional-da-protecao-de-dados-anpd-publica-guia-orientativo-sobre-tratamento-de-dados-pessoais-pelo-poder-publico
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>

<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
Guia Orientativo - Aplicação da Lei Geral de Proteção de Dados Pessoais por agentes de tratamento no contexto eleitoral. 

A  ANPD e o Tribunal Superior Eleitoral, fruto de um trabalho em conjunto, publicam o Guia Orientativo - Aplicação da Lei Geral de Proteção de Dados Pessoais por agentes de tratamento no contexto eleitoral.:  



<a target='_blank' href="https://www.gov.br/anpd/pt-br/assuntos/noticias/guia_lgpd_final.pdf" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br/assuntos/noticias/guia_lgpd_final.pdf
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>

<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
ANPD publica Guia de Segurança da Informação para Agentes de Tratamento de Pequeno Porte


<a target='_blank' href="https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-guia-de-seguranca-para-agentes-de-tratamento-de-pequeno-porte" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-guia-de-seguranca-para-agentes-de-tratamento-de-pequeno-porte
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>
<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
No Dia Internacional da Proteção de Dados,28 de janeiro, a ANPD publica Guia Orientativo sobre Tratamento de Dados Pessoais pelo Poder Público

<a target='_blank' href="https://www.gov.br/anpd/pt-br/assuntos/noticias/no-dia-internacional-da-protecao-de-dados-anpd-publica-guia-orientativo-sobre-tratamento-de-dados-pessoais-pelo-poder-publico" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br/assuntos/noticias/no-dia-internacional-da-protecao-de-dados-anpd-publica-guia-orientativo-sobre-tratamento-de-dados-pessoais-pelo-poder-publico
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>
<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
SEMANA DA PROTEÇÃO DE DADOS - ANPD: Vídeo de abertura sobre o  Dia Internacional da Proteção de Dados e Semana da Proteção de Dados Pessoais 2022


<a target='_blank' href="https://www.gov.br/anpd/pt-br/semana-da-protecao-de-dados-2022/semana-protecao-dados-2022/semana-da-protecao-de-dados-2022" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br/semana-da-protecao-de-dados-2022/semana-protecao-dados-2022/semana-da-protecao-de-dados-2022
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>


<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
Papel da ANPD, direitos dos titulares e função da ouvidoria.



<a target='_blank' href="https://www.gov.br/anpd/pt-br/semana-da-protecao-de-dados-2022/semana-da-protecao-de-dados-pessoais-2022-papel-da-anpd-direitos-dos-titulares-e-funcao-da-ouvidoria/papel-da-anpd-direitos-dos-titulares-e-funcao-da-ouvidoria" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br/semana-da-protecao-de-dados-2022/semana-da-protecao-de-dados-pessoais-2022-papel-da-anpd-direitos-dos-titulares-e-funcao-da-ouvidoria/papel-da-anpd-direitos-dos-titulares-e-funcao-da-ouvidoria
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>

<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
Você sabe qual a importância dos Acordos de Cooperação Técnica e dos Guias Orientativos feitos pela ANPD?



<a target='_blank' href="https://www.gov.br/anpd/pt-br/semana-da-protecao-de-dados-2022/voce-sabe-qual-a-importancia-dos-acordos-de-cooperacao-tecnica-e-dos-guias-orientativos-feitos-pela-anpd" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br/semana-da-protecao-de-dados-2022/voce-sabe-qual-a-importancia-dos-acordos-de-cooperacao-tecnica-e-dos-guias-orientativos-feitos-pela-anpd
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>

<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
Participação da ANPD no cenário internacional e a regulamentação de transferências internacionais de dados pessoais



<a target='_blank' href="https://www.gov.br/anpd/pt-br/semana-da-protecao-de-dados-2022/participacao-da-anpd-no-cenario-internacional-e-a-regulamentacao-de-transferencias-internacionais-de-dados-pessoais/participacao-da-anpd-no-cenario-internacional-e-a-regulamentacao-de-transferencias-internacionais-de-dados-pessoais" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br/semana-da-protecao-de-dados-2022/participacao-da-anpd-no-cenario-internacional-e-a-regulamentacao-de-transferencias-internacionais-de-dados-pessoais/participacao-da-anpd-no-cenario-internacional-e-a-regulamentacao-de-transferencias-internacionais-de-dados-pessoais
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>



<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
Incidentes de segurança com dados pessoais



<a target='_blank' href="https://www.gov.br/anpd/pt-br/semana-da-protecao-de-dados-2022/incidentes-de-seguranca-com-dados-pessoais/incidentes-de-seguranca-com-dados-pessoais" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br/semana-da-protecao-de-dados-2022/incidentes-de-seguranca-com-dados-pessoais/incidentes-de-seguranca-com-dados-pessoais
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>





<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
RESOLUÇÃO CD/ANPD Nº 1, DE 28 DE OUTUBRO DE 2021 

Prova o Regulamento do Processo de Fiscalização e do Processo Administrativo Sancionador no âmbito da Autoridade Nacional de Proteção de Dados. 

<a target='_blank' href="https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-1-de-28-de-outubro-de-2021-355817513" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-1-de-28-de-outubro-de-2021-355817513
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>

<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
RESOLUÇÃO CD/  ANPD Nº 2, DE 27 DE JANEIRO DE 2022:  Aprova o Regulamento de aplicação da LGPD, LEI Nº 13.709, de 14/08/2018, para agentes de tratamento de pequeno porte.


<a target='_blank' href="https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-2-de-27-de-janeiro-de-2022-376562019" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-2-de-27-de-janeiro-de-2022-376562019
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>

<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
No Dia Internacional da Proteção de Dados, ANPD publica Guia Orientativo sobre Tratamento de Dados Pessoais pelo Poder Público



<a target='_blank' href="https://www.gov.br/anpd/pt-br/assuntos/noticias/no-dia-internacional-da-protecao-de-dados-anpd-publica-guia-orientativo-sobre-tratamento-de-dados-pessoais-pelo-poder-publico" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br/assuntos/noticias/no-dia-internacional-da-protecao-de-dados-anpd-publica-guia-orientativo-sobre-tratamento-de-dados-pessoais-pelo-poder-publico
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>




<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
Senado Federal aprova Proposta de Emenda à Constituição 17 (PEC 17/2019) que inclui a proteção de dados pessoais no rol de direitos e garantias fundamentais



<a target='_blank' href="https://www.gov.br/anpd/pt-br/assuntos/noticias/senado-federal-aprova-proposta-de-emenda-a-constituicao-17-pec-17-2019-que-inclui-a-protecao-de-dados-pessoais-no-rol-de-direitos-e-garantias-fundamentais" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.gov.br/anpd/pt-br/assuntos/noticias/senado-federal-aprova-proposta-de-emenda-a-constituicao-17-pec-17-2019-que-inclui-a-protecao-de-dados-pessoais-no-rol-de-direitos-e-garantias-fundamentais
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>



<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
DIREITO DIGITAL


<a target='_blank' href="https://www.aurum.com.br/blog/direito-digital/#:~:text=O%20direito%20digital%20%C3%A9%20um,rela%C3%A7%C3%B5es%2C%20evitando%20assim%20pr%C3%A1ticas%20lesivas" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.aurum.com.br/blog/direito-digital/#:~:text=O%20direito%20digital%20%C3%A9%20um,rela%C3%A7%C3%B5es%2C%20evitando%20assim%20pr%C3%A1ticas%20lesivas
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>


<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
COMPLIANCE



<a target='_blank' href="https://www.aurum.com.br/blog/o-que-e-compliance/" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.aurum.com.br/blog/o-que-e-compliance/
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>

<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
MEDIAÇÃO

LEI Nº 13.140, DE 26 DE JUNHO DE 2015. 

Dispõe sobre a mediação entre particulares como meio de solução de controvérsias e sobre a autocomposição de conflitos no âmbito da administração pública; altera a Lei nº 9.469, de 10 de julho de 1997, e o Decreto nº 70.235, de 6 de março de 1972; e revoga o § 2º do art. 6º da Lei nº 9.469, de 10 de julho de 1997. 



CÓDIGO DE ÉTICA DA OAB



<a target='_blank' href="https://www.oab.org.br/visualizador/19/codigo-de-etica-e-disciplina" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.oab.org.br/visualizador/19/codigo-de-etica-e-disciplina
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>

<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
LEI Nº 8.906, DE 4 DE JULHO DE 1994. Dispõe sobre o Estatuto da Advocacia e a Ordem dos Advogados do Brasil (OAB).



<a target='_blank' href="http://www.planalto.gov.br/ccivil_03/leis/l8906.htm#:~:text=L8906&text=LEI%20N%C2%BA%208.906%2C%20DE%204%20DE%20JULHO%20DE%201994.&text=Disp%C3%B5e%20sobre%20o%20Estatuto%20da,Advogados%20do%20Brasil%20(OAB)" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
http://www.planalto.gov.br/ccivil_03/leis/l8906.htm#:~:text=L8906&text=LEI%20N%C2%BA%208.906%2C%20DE%204%20DE%20JULHO%20DE%201994.&text=Disp%C3%B5e%20sobre%20o%20Estatuto%20da,Advogados%20do%20Brasil%20(OAB)
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>
<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
CÓDIGO DE ÉTICA DOS PROFISSIONAIS DA ADMINISTRAÇÃO E CONSELHO DE ADMINISTRAÇÃO


<a target='_blank' href="https://cfa.org.br/codigo-de-etica-dos-profissionais-de-administracao-voce-segue/" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://cfa.org.br/codigo-de-etica-dos-profissionais-de-administracao-voce-segue/
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>

<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
ESCOLA SUPERIOR DE ADVOCACIA



<a target='_blank' href="https://esa.oab.org.br/?" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://esa.oab.org.br/?
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>


<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
SITES ÚTEIS AFINS À ÁREA DE ATUAÇÃO DO GRUPO VEDETTA


ORDEM DOS ADVOGADOS DO BRASIL – OAB 


<a target='_blank' href="https://www.oabmg.org.br/" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.oabmg.org.br/

</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>

<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
CAIXA DE ASSISTÊNCIA DA OAB


<a target='_blank' href="https://www.caamg.org.br/gclid=EAIaIQobChMIue7RgNn49QIVCidMCh1XMQxREAAYASAAEgLgGvD_BwE" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow:hidden;
">
https://www.caamg.org.br/gclid=EAIaIQobChMIue7RgNn49QIVCidMCh1XMQxREAAYASAAEgLgGvD_BwE
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>
<p Style="text-align:left;color: black;width: 86%;font-size: 89%;margin: 18px;">
ESCOLA NACIONAL DA MAGISTRATURA



<a target='_blank' href="https://escoladamagistratura.amb.com.br/?utm_term=cursos%20escola%20magistratura&utm_campaign=%5BS%5D+Certifica%C3%A7%C3%B5es+-+ENM+(Escola+Nacional+de+Magistratura)&utm_source=adwords&utm_medium=ppc&hsa_acc=8576101588&hsa_cam=11548920711&hsa_grp=135856547241&hsa_ad=575173030683&hsa_src=g&hsa_tgt=kwd-1257635471202&hsa_kw=cursos%20escola%20magistratura&hsa_mt=b&hsa_net=adwords&hsa_v" Style="
    text-align: left;
    /* color: black; */
    width: 86%;
    font-size: 89%;
    margin: 0px;
    display:block;
    overflow: hidden;
">
https://escoladamagistratura.amb.com.br/?utm_term=cursos%20escola%20magistratura&utm_campaign=%5BS%5D+Certifica%C3%A7%C3%B5es+-+ENM+(Escola+Nacional+de+Magistratura)&utm_source=adwords&utm_medium=ppc&hsa_acc=8576101588&hsa_cam=11548920711&hsa_grp=135856547241&hsa_ad=575173030683&hsa_src=g&hsa_tgt=kwd-1257635471202&hsa_kw=cursos%20escola%20magistratura&hsa_mt=b&hsa_net=adwords&hsa_v
</a>
</p>
<div  Style='border: 1px solid rgb(0 0 0 / 20%);'>
</div>

</div>
         
     
     
      </header>
      <footer>
      { rodape()}
      {App()}
      </footer>
    </div>
     );
}
function video_conteiner() {
  return (
    <div data-anime="up">
    <style>
{`
  .video-react.video-react-fluid, .video-react.video-react-16-9, .video-react.video-react-4-3 {
   
  }
  video-react-controls-enabled.video-react-paused.video-react-fluid video-react-user-active.video-react-workinghover.video-react{
   
  }
  
  `}
    </style>
    <article>
      <div className='CardGroup'>
      <CardGroup>  
    
    <Player
      playsInline imagem_video
      poster={imagem_video}
      src={video_teste}
      
      
    />
</CardGroup>  
<CardGroup>  
<div>

  <div className='collapse_1'> 
  <div>
  <Button
    color="primary"
    id="toggler"
    style={{
      marginBottom: '1rem'
    }}
  >
    Toggle

    ______________________________________________________________
  </Button>
  <UncontrolledCollapse toggler="#toggler">
    <Card>
      <CardBody>
        Lorem ipsum dolor 
      </CardBody>
    </Card>
  </UncontrolledCollapse>
  <Button
    color="primary"
    id="toggler"
    style={{
      marginBottom: '1rem'
    }}
  >
    Toggle

   ______________________________________________________________
  </Button>
  <UncontrolledCollapse toggler="#toggler">
    <Card>
      <CardBody>
        Lorem ipsum dolor
      </CardBody>
    </Card>
  </UncontrolledCollapse>
  <Button
    color="primary"
    id="toggler"
    style={{
      marginBottom: '1rem'
    }}
  >
     Toggle

    ______________________________________________________________
  </Button>
  <UncontrolledCollapse toggler="#toggler">
    <Card>
      <CardBody>
        Lorem ipsum dolor
      </CardBody>
    </Card>
  </UncontrolledCollapse>
</div>
</div>
</div>

   
  
   
    </CardGroup>  
    </div>
    
    </article>
 </div>
   
   );
}
function acticle() 
{
  return (
    <div>
       <style>
     {`
    .Titulos{
      display: inline-block;
      position: absolute;
      margin-bottom: 100px;
      margin-top: -50px;
      float: left;
      margin-left: -1000px;
    `}
    </style>
   <article>
    <Cardflip/>
  

   
    
    
   </article>
   </div>

  
  );
}

function section() 
{
  return (
   <section>
   {carousel()}
   </section>
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
function sidebar() 
{
  return (
   <sidebar>
     <header> 
       <div ClassName="SideBar">
         
       </div>
       </header>
 
   </sidebar>
  );
}

function carousel(){
return(
  <div> 
    <style>
{
`
.w-100{
  width: 100rem !important;
  height: 800px;
  }
`
}

    </style>
<UncontrolledCarousel
  items={[
    {
      altText: '',
      caption: '',
      key: 1,
      src: wallpaper_3
    },
    {
      altText: '',
      caption: '',
      key: 2,
      src: wallpaper_2
    },
    {
      altText: '',
      caption: '',
      key: 3,
      src: wallpaper_1
    }
  ]}
 />
 </div>
)

}




