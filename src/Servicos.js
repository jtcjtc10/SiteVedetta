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
import servico from './img/imagem_serviços.jpg'
import border_1 from './img/border_1.png';
export const Servicos = () => {
  const storeId = "storeId";
  
  useEffect(() => {

    return () => {
    };
  }, []);

  return (
    <div className="App " date-anime="up">
      <style>
      {`.imagemserv{
            width: 80%;
            
                    
          }.textoserv{
            width: 80%;
            margin-left: 1%;
        
                    
          }

      `}

      </style>
       { Cabecalho()} 
     

      <header className="App-header principal section"Style={"margin-top:200px"} >

       
        <div className='imagemserv'>
        <img className = "IMGS" src={servico} alt="link "/> 
        </div>
        <div className='textoserv'>

        <p className='titulot' Style='margin-top: 10px;'>
        LGPD e Compliance</p>

        <p Style="text-align:left;margin-left: 7%;font-size: 140%;width: 90%;margin-top: 1%;margin-bottom: 2.5%;">
        Implantação, adequação, diagnósticos, redação de manuais de conduta, termos de sigilo, criação de políticas de privacidade, elaboração de relatórios de risco e de impacto à LGPD. 
         Compliance nas áreas trabalhista, tributária e empresarial.
        </p>

        <br></br>

        <p className='titulot' Style='margin-top: 10px;'>
        Direito Digital </p>

        <p Style="text-align:left;margin-left: 7%;font-size: 140%;width: 90%;margin-top: 1%;margin-bottom: 2.5%;">
        Com o advento da Lei Geral de Proteção de Dados, as empresas precisam estar atentas aos seus processos e procedimentos para mitigar o vazamento de dados pessoais de seus clientes. 
         Conte com a nossa consultoria para a implementação e adequação à LGPD.

        </p>

        <br></br>

        <p className='titulot' Style='margin-top: 10px;'>
        Mediação de conflitos e Constelação </p>

        <p Style="text-align:left;margin-left: 7%;font-size: 140%;width: 90%;margin-top: 1%;margin-bottom: 2.5%;">
        Nas áreas Empresarial e de Família
        </p>

        <br></br>

        <p className='titulot' Style='margin-top: 10px;'>
        Governança e Ouvidoria </p>

        <p Style="text-align:left;margin-left: 7%;font-size: 140%;width: 90%;margin-top: 1%;margin-bottom: 2.5%;">
        Trabalhamos para que a sua empresa atue em conformidade com os mais elevados padrões de governança. Ouvir o cliente é fundamental nos dias de hoje. A implementação da ouvidoria pode ser uma solução para aproximar você do seu cliente.
        </p>

        <br></br>

        <p className='titulot' Style='margin-top: 10px;'>
        Gestão Estratégica </p>

        <p Style="text-align:left;margin-left: 7%;font-size: 140%;width: 90%;margin-top: 1%;margin-bottom: 2.5%;">
        Identificação da realidade e do contexto atual da empresa, bem como seu posicionamento no mercado em que atua. Propostas de soluções inovadoras para a obtenção de resultados diferenciados perante à concorrência.
        </p>

        <br></br>

        <p className='titulot' Style='margin-top: 10px;'>
        Consultorias, perícias e soluções personalizadas </p>

        <p Style="text-align:left;margin-left: 7%;font-size: 140%;width: 90%;margin-top: 1%;margin-bottom: 2.5%;">
        Prestamos consultoria e realizamos perícias na área da Gestão. Buscamos soluções adequadas e acessíveis para a realidade da sua organização.
        </p>

        <br></br>

        <p className='titulot' Style='margin-top: 10px;'>
        Gestão de processos e de projetos </p>

        <p Style="text-align:left;margin-left: 7%;font-size: 140%;width: 90%;margin-top: 1%;margin-bottom: 2.5%;">
        Diagnóstico e identificação de gaps em projetos e processos, análise e elaboração de propostas para otimização de projetos e processos, conformidade, monitoramento e acompanhamento
        </p>

        <br></br>

        <p className='titulot' Style='margin-top: 10px;'>
        Logística </p>

        <p Style="text-align:left;margin-left: 7%;font-size: 140%;width: 90%;margin-top: 1%;margin-bottom: 2.5%;">
        Assessoria na busca das melhores soluções no gerenciamento de Supply Chain desde a obtenção dos insumos até a entrega dos produtos e serviços nas mãos do cliente.
        </p>

        <br></br>

        <p className='titulot' Style='margin-top: 10px;'>
        Recursos Humanos </p>

        <p Style="text-align:left;margin-left: 7%;font-size: 140%;width: 90%;margin-top: 1%;margin-bottom: 2.5%;">
        Capacitação, treinamento e desenvolvimento de pessoas com foco nas demandas das consultorias prestadas.	
        </p>

        <br></br>

        <p className='titulot' Style='margin-top: 10px;'>
        Marketing </p>

        <p Style="text-align:left;margin-left: 7%;font-size: 140%;width: 90%;margin-top: 1%;margin-bottom: 2.5%;">
        Pesquisas de mercado, campanhas de divulgação, suporte no gerenciamento de mídias digitais, na análise das métricas e na gestão de CRM.
        </p>

        <br></br>




        

        </div>




      


      
        {sidebar()}
   
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




