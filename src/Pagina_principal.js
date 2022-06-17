import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { UncontrolledCarousel } from 'reactstrap';
import Cards from './cardT.js';
import  navbar  from './cabecalho';
import "../node_modules/video-react/dist/video-react.css";
import { CardGroup } from 'reactstrap';
import React from 'react';
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
import Cardflip from './Card-flip.js';
import App from './whatzap.js';
import Cardserviços from './card_serviços.js';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
import scriptjs from './script.js';
import rodape from './rodape.js';
import SimpleSlider from './responsive_card.js'
import wallpaper_3 from './img/wallpaper_3_auto_x2_auto_x2.jpg'
import wallpaper_2 from './img/background_1_auto_x2_auto_x2.jpg'
import wallpaper_1 from './img/wallpaper.jpg'
import servico1 from './img/servico1.jpg'

import riscos from './img/riscos.png'
import consultoria from './img/consultoria.png'
import juridico from './img/juridico.png'
import gestaoC from './img/gestaoC.png'
import marketing from './img/marketing.png'
import gestao from './img/gestao.png'
import border_1 from './img/border_1.png';
import logo_nav from './img/logo_auto_x2-removebg-preview.png'
import { Link } from 'react-router-dom';
import simple_offcanvas from'./simple_offcanvas';
export const Pagina_principal = () => {
  const storeId = "storeId";
  
  useEffect(() => {

    return () => {
    };
  }, []);

  return (
    <div className="App" date-anime="up">
  
       { Cabecalho()} 
       {section()}
      <div className="principal"date-anime="up" Style='margin-top: 10%;
    margin-bottom: 10%;'>
<h2 Style="color: #004f80;font-style: italic;margin-left: 2%;margin-right: auto;right: auto;margin-top: 2%;text-align: left;width: 37.5%;"><p></p><p></p><p></p></h2><h2 Style="color: #004f80;/* font-style: italic; */margin-left: 7%;margin-right: auto;right: auto;margin-top: 5.5%;text-align: left;font-size: 200%;width: 39%;"><p Style="
     width: 230%;
">Novos cenários trazem novos desafios. </p><p Style="
width: 230%;
">Nós trazemos soluções.</p><br/><br/><p Style="
    font-style: italic;width: 230%;
">Qual é o seu desafio?</p></h2><p Style="text-align:left;margin-left: 7%;font-size: 140%;width: 80%;margin-top: 1%;margin-bottom: 2.5%;">
Serviços customizados, confiabilidade e capacidade multidisciplinar para que seu negócio tenha bons resultados e seja sustentável.
</p>


<br/><br/>

<Link to="/Servicos" Style="text-decoration:none">
<Button  value="Serviços" Style="
    margin-right: 1%;
    margin-left: 6.5%;
    margin-top: 1%;
    margin-bottom: auto;
    border-radius: 25px;
    display: block;
    background-color: #e59b05;
    border: none;
    color: black;
    cursor: pointer;
    padding: 12px 20px;
">


Serviços
  </Button>
  </Link>
  <Link to="/Formulario" Style="text-decoration:none">
  <Button value="
Fale com um especialista
    " Style="
    margin-right: 1%;
    margin-left: 6.5%;
    margin-top: 1%;
    margin-bottom: auto;
    border-radius: 25px;
    display: block;
    background-color: #e59b05;
    border: none;
    color: black;
    cursor: pointer;
    padding: 12px 20px;
">

Fale com um especialista
  </Button>
  </Link>

<div className='pqexistimos' Style="margin-top: 20px;" >

<p Style="    color: #000;
    font-family: Lemon milk Medium;
    font-size: 175%;
    font-style: italic;
    font-weight: 700;
    margin-left: 7%;
    margin-right: auto;
    margin-top: 5.5%;
    right: auto;
    text-align: left;
    width: 80%;" >
  Por que existimos?</p>

<p Style="text-align:left;margin-left: 7%;font-size: 140%;width: 80%;margin-top: 1%;margin-bottom: 2.5%;">
  Queremos impactar o mundo positivamente a partir do apoio e fortalecimento de negócios, empresas e profissionais, tornando-os sustentáveis e lucrativos, transformando seus negócios em paixão.</p>
 

<p Style="    color: #000;
    font-family: Lemon milk Medium;
    font-size: 175%;
    font-style: italic;
    font-weight: 700;
    margin-left: 7%;
    margin-right: auto;
    margin-top: 5.5%;
    right: auto;
    text-align: left;
    width: 80%;" >
Como fazemos o que fazemos?</p>

<p Style="text-align:left;margin-left: 7%;font-size: 140%;width: 80%;margin-top: 1%;margin-bottom: 2.5%;">
Acreditamos que as competências e habilidades técnicas somadas às comportamentais e às experiências vividas por profissionais seniores, trazem a confiança e relacionamento ético esperado por qualquer interessado na contratação de consultoria e serviços jurídicos e de gestão. Agimos com respeito às diversas especificidades de cada negócio ou empresário, considerando suas necessidades reais e oportunidades. Gostamos de inovação e de desafios, por isso, nos tornamos parceiros de nossos clientes em qualquer jornada rumo ao sucesso.</p>


<p Style="    color: #000;
    font-family: Lemon milk Medium;
    font-size: 175%;
    font-style: italic;
    font-weight: 700;
    margin-left: 7%;
    margin-right: auto;
    margin-top: 5.5%;
    right: auto;
    text-align: left;
    width: 80%;" >
O que fazemos?</p>

<p Style="text-align: left;margin-left: 7%;font-size: 140%;width: 80%;margin-top: 1%;margin-bottom: 2.5%;">
Prestamos consultoria e assessoria jurídica e de gestão, desenvolvendo as potencialidades de sua empresa, com olhar atento para oportunidades de crescimento e inovações de maneira sustentável e lucrativa.</p>


</div>

<div className='equipet' Style="margin-top: 20px;" >

</div>

</div>
      <footer>
      { rodape()}
      {App()}
      </footer>
    </div>
     );
}
function LISTA() {
  var element = document.getElementsByClassName('texto_collapse'); 
  const aberto = false;
  function opem(valor){
       
    valor = !valor;

    return !valor;
}

var variavel = !opem();

function checar(valor){
    
  if(valor == true){
   
    valor = false;
   
  }
 else{
 
  valor = true;

 }

  return valor;
}


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
  
<div className="conteudosartigo">
  <Button
    color="primary"
    onClick={function noRefCheck(){
      variavel = checar(variavel);
     var  teste = element[0].classList.contains("show");

      if(teste == true){
     
      element[0].classList.remove("show");
      }else{
        element[0].classList.add("show");
      }
    }}
    style={{
      marginBottom: '1rem'
    }}
  >
    Toggle

______________________________________________________________
  </Button>
  <Collapse tag="div" className='texto_collapse' >
    <Card id="Conteudo_artigo"  data-anime="left">
      <CardBody data-anime="left" Style="transition: all 2s linear;">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </CardBody>
    </Card>
  </Collapse>
</div>


  
</article>
 </div>
   
   );
}
function acticle2() 
{
  return (
    <div date-anime="up" >
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

    <Cardserviços/>
  

   
    
    
   </article>
   </div>

  
  );
}




function section() 
{
  return (
   <section date-anime="up" className="section">
     <div id="Section" date-anime="up">
     </div>
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


 
  <div date-anime="up"> 
  
    <style>
{
`
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

export default Pagina_principal;
