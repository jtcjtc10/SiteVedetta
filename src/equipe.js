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
import SimpleSlider from './responsive_card.js'
import wallpaper_3 from './img/wallpaper_3_auto_x2_auto_x2.jpg'
import wallpaper_2 from './img/background_1_auto_x2_auto_x2.jpg'
import wallpaper_1 from './img/wallpaper.jpg'
import servico from './img/imagem_serviços.jpg'
import border_1 from './img/border_1.png';
export const Equipe = () => {
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

       
        <div Style='margin-top: 10%'>
        


        <div className='container ' Style="margin-left:auto;margin-rigth:auto">
        <p className='titulot' Style="    width: 80%;display: inline-block;  margin-left: 0;"  >
NOSSA EQUIPE</p>

<br></br>

<p className='hometext' Style="    width: 80%;display: inline-block;color:black;margin-left:0%;margin-rigth:auto;">
O Grupo é composto por profissionais multidisciplinares, imbuídos da missão de apoiar outros empresários e profissionais liberais, garantindo maior segurança, eficiência e lucratividade de suas empresas e negócios. Somos especialistas em implementação da LGPD - Lei Geral de Proteção de Dados. Além disso, oferecemos Consultoria e Serviços Jurídicos e de Gestão.</p>
</div>
<br></br>

{acticle()}
{SimpleSlider()}

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




