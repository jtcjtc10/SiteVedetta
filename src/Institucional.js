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
import border_1 from './img/border_1.png';
export const Institucional = () => {
  const storeId = "storeId";
  
  useEffect(() => {

    return () => {
    };
  }, []);

  return (
    <div className="App" date-anime="up">
       { Cabecalho()} 
      <Helmet>
                <script src="./script.js"></script>

      </Helmet>
      
      <header className="App-header principal section"Style={"margin-top:200px"} >
       
        <p>
       
       
        
        <CardGroup className=" c" data-anime="up"> 
        <div id="center">Time de sucesso</div>
        {acticle()}
        </CardGroup>
        {sidebar()}
        <div id="div_white"width={"100%"}backgroundColor={"white"}>
        <div className= "f"data-anime="up"> 
        <div id="inline">
         Entre em Contato
        </div>
        {Formulario()}
        
        </div>
        </div>
        </p>
       
         
     
     
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




