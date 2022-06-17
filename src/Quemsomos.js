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
import border_1 from './img/border_1.png';
import background_01 from './img/imagens_01_auto_x2.jpg';
import Formulario from './form_trabalhe.js';
export const Quemsomos = () => {
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
       
       <div className='LISTA container' Style="margin-top: 10%;color:black; margin-top:2;" date-anime="up">
       <div date-anime="up" className='LISTA1 l' >


       <p Style="display: inline-block;"><h3 Style="display: inline-block;"  >Nossa história </h3>  se inicia em uma sala de professores em uma instituição de ensino superior de Contagem/ MG. Em curtos encontros em horários de intervalo entre as aulas, deslocamentos para as salas de aula entre os corredores dos prédios, antes do isolamento social, claro, muitos sonhos e desejos de empreender, explorar novas atuações profissionais e consolidarmos uma carreira mais atuante em consultoria em nossa jornada profissional foram compartilhados entre nós: Alexandre Melo, CassiBarbosa e Joelma Oliveira. </p>

       
      <p>Chegamos ao ano de 2020, nos dois primeiros meses do ano tudo dentro da normalidade e, de repente, mais parecia que estávamos dentro de um enredo de filme de ficção científica. Uma doença se espalhou rapidamente em alguns lugares no mundo, alguns perderam milhares de pessoas em poucos dias e nos vimos sendo obrigados a nos recolher ao convívio físico com apenas as pessoas que dividiam o mesmo endereço domiciliar que o nosso.</p>

     <p>Tivemos que nos adaptar rapidamente a uma nova realidade e aprender uma nova forma de fazer as coisas simples e corriqueiras do nosso cotidiano, da noite para o dia. Os encontros nos corredores cessaram e os bate-papos na sala dos professores também.</p>

     <p>Foram meses de muito trabalho até que nos acostumássemos com essa novidade. De repente, conseguimos voltar a nos falar nas salas virtuais e nossos sonhos e desejos se transformaram em um propósito. Um propósito que foi ganhando volume, se movendo como a água que corre encontrando pequenos espaços ao longo de seu caminho, esbarrando em oportunidades e chegamos ao segundo semestre do ano de 2021.</p>

     <p>Começamos a ter encontros periódicos para discutirmos informações de mercado, planejar, compartilharmos projetos, apresentarmos ideia e por fim, nasceu a Vedetta, uma estrela maior porque conta com a energia de outras três estrelinhas, seus idealizadores. Três profissionais com décadas de carreira que pretendem dedicar toda sua expertise, colocar sua energia e profissionalismo no ato de apoiar, direcionar, propiciar e potencializar outras empresas e negócios no caminho da atuação profissional, em conformidade com políticas e diretrizes adequadas aos seus negócios, às inovações, tendências e em conformidade com a legislação vigente.</p>
  
</div>

<div className='instis' Style="margin-top: 20px;" >

<p className='titulot' Style="margin-left: 1%;" >
  INSTITUCIONAL</p>
 
  <p className='hometext' Style="display: inline-block;"><h3 Style="display: inline-block;"  >Missão: </h3>  Guardar vigília, direcionar e potencializar pessoas, negócios e empresas para que impactem positivamente o mercado. </p>

<br></br>

  <p className='hometext' Style="display: inline-block;"><h3 Style="display: inline-block;"  >Visão: </h3>  Ser referência em consultoria, assessoria e serviços empresariais multidisciplinares, apoiando os clientes no desenvolvimento de seu potencial e na descoberta de inovações com segurança, eficiência e lucratividade. </p>

<br></br>

<p className='hometext' Style="display: inline-block;"><h3 Style="display: inline-block;"  >Valores: </h3><br></br>Foco no cliente e vigilância <br></br>Inovação nas soluções <br></br>Honestidade e transparência <br></br>Excelência no que fazemos <br></br>Respeito às pessoas  </p>

<br></br>

<p className='titulot' Style="display: inline-block; margin-left: -59%;"  >
NOSSA EQUIPE</p>

<br></br>

<p className='hometext' Style="display: inline-block;">
O Grupo é composto por profissionais multidisciplinares, imbuídos da missão de apoiar outros empresários e profissionais liberais, garantindo maior segurança, eficiência e lucratividade de suas empresas e negócios. Somos especialistas em implementação da LGPD - Lei Geral de Proteção de Dados. Além disso, oferecemos Consultoria e Serviços Jurídicos e de Gestão.</p>

<br></br>

{acticle()}
{SimpleSlider()}
 {Formulario()}


  


</div>


       
        </div>
 
       
       
        

      
       
        {sidebar()}
        
        </p>
       
         
     
     
      </header>
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
   Quem Somos 
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

function acticle() 
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




