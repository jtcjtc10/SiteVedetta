import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardGroup, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Typography } from "@material-ui/core";
import { Container } from "reactstrap";



export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 600,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Container  date-anime="up"  className="cardss2 color responsive_card"  id="slid_card" Style="    margin-bottom: 25%;    background-color: #1d1d1b;" >
      <Slider {...settings}>
 <div  date-anime="up" className='card2' >
    
    <style>
    
        {`.s2{ 
           width: 1200px;
        
           height: 488px;
           margin-right: 20px;
           margin-left: 10%;
           flex-flow: row;
           margin-right: auto;
           margin-left: 0px;
           margin-top: 0px;
           margin-bottom: 0;
           justify-content: center;
           border-radius: 3%;
           display: flex;

          }

            .color{
            background-color: rgba(2, 8, 44, 0.5);
     
        }
        .card-title {
          color: Aquamarine;
          text-shadow: 3px 3px black;
                    }         
          .card-group{
         justify-content: center;
       
         width: 100%;
         margin-top: 60px;
         margin-bottom: 60px;
                    }
          .card-text {
          color:white;
                    }
          .card{
            margin-right:10px;
            margin-top: 10px;
            background:rgb(1,1,1,0);
            border-radius: 25px;
            width:265px;
           }
         .card-img-top{
          width: 100%;
          height: 100%;
          position: absolute;
          opacity: 20%;
          border-radius: 25px;
                  }
           .Card_conteiner{
            width: 296.667px;
            margin-right: 12px;
                    }
            .card-text{
            width: 250px;
            height: 350px;  
            box-sizing: border-box;
                 }        

           Card_conteiner:hover {
            width:150%;
            height:200%;
                    }
                    .cardss {
                  
    margin: 50px;
    width: 1200px;
     overflow: hidden; 
    height: 488px;
    margin-right: 20px;
    margin-left:10%;
    flex-flow: row;

                  }  
.cardss2{
                  margin: 50px;
                  width: 1200px;
                  height: 488px;
                  margin-right: 20px;
                  margin-left:10%;
                  flex-flow: row;
                  padding-left:10px;
                  padding-right:10px;
                  padding-top:0;
                  padding-botton:0;
}
                  .card2{
                    background-color: rgba(4, 8, 39, 0);
                    padding: 20px;
                    display: flex;
                }
                  #next  
                    {
                      width: 64px;
                      position: absolute;
                      margin-top: 180px;
                       background-color: rgba(37, 42, 57,0.2);
                     
                    }
                    #previous{
                      width: 35px;
                      position: absolute;
                      margin-top: 178px;
                      margin-left: -40px;
                      background-color: rgba(37, 42, 57,0.2);
                     
                    }.slick-list {
                      position: relative;
                      display: block;
                      margin: 0;
                      padding: 0;
                      overflow-x: clip;
                      overflow-y: visible;
                  }
                    #card_previous{
                      margin-right: -221px;
                      margin-top: -1px;
                      margin-bottom: 0;
                      /* overflow: hidden; */
                      padding: 0;
                      background-color: rgb(12, 17 ,44, 0);
                      margin-left: -10px;
                    }
                    .horve{
                      background-color:grey;
                    }
                    `               
           
                    }
      </style>
    <div className='s2' Style="width: 100%;">  
    <div className = "Card_conteiner">
    <div id="card">

<div id="inner">

<div id="true" className="img_card" >

  <ul className="list_ul">
  
  <li>Msc. em Inteligência Competitiva;  Especialista em Pesquisa de Mercado e Marketing Estratégico.</li>
  <li>22 anos de experiência, atuando como Gerente de Projetos em Pesquisa de Mercado e Consultoria de Negócios; 8 anos como docente na área mercadológica.</li>
  <li>Formação complementar: UX/ UI, Marketing Digital de Alta Performance, Coach, Psicologia Positiva; Desenvolvimento FullStack e Sistemas para Internet (em andamento).</li>
  </ul>
  <p className="subtitle_list_ul" >
  <a target="_blank" className="link_ul_LinkedIn" href="https://www.linkedin.com/in/cassibarbosaux">
  LinkedIn
  </a>
  
  
  </p>
  <p className="subtitle_list_ul" >
  <a target="_blank" className="link_ul_Latter" href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=4F6BECD028146BB27C7824049A8BCBFC.buscatextual_66">
  Latter
  </a>
  </p>
</div>
<div id="front" className="img_card Cassiane" Style="display: flex;width: 100%;height: 100%;background-repeat: no-repeat;background-size: cover;border-radius: 8px;aspect-ratio: 382 / 500;"></div>
</div>
</div>
  </div>
  </div>
</div>
        <div className='card2' >
        <div className='s2'Style="width: 100%;">  
        <div className = "Card_conteiner">
        <div id="card" >
<div id="inner">
<div id="true">


  <ul className="list_ul">
  
  <li> Bacharel em Administração; Tecnólogo nas áreas de Mediação, Investigação Criminal e Perícia Forense; Especialista e Mestre em Educação Tecnológica pelo CEFET/MG.</li>
  <li>Experiência de 30 anos nas áreas Comercial, Comunicação e Marketing, Logística, Planejamento Estratégico, Gestão de Processos e inteligência Empresarial.</li>
  <li> Desde 2008 atuando como professor em cursos de graduação e pós-graduação nas áreas de Administração e Ciências Contábeis.</li>
  
  <a target="_blank" className="link_ul_LinkedIn" href="https://www.linkedin.com/in/alexandre-melo-76333193/">
  LinkedIn
  </a>
  </ul>
  

</div>
<div id="front" className="img_card Alexandre alexandre_foto" Style="display: flex; width: 100%; height: 100%;  background-repeat: no-repeat; background-size: 140% 175%; background-position-x: 55%; background-position-y: 33%; border-radius: 8px; aspect-ratio: 382 / 500;"></div>

</div>
</div>
  </div>      
        </div>
        </div>
        <div className='card2'>  
        <div className='s2' Style="width: 100%;">      
      <div className = "Card_conteiner">
      <div id="card">
<div id="inner">
<div id="true">
  <ul className="list_ul">
  
  <li>Advogada Sênior e consultora Jurídica. Diretora do Departamento Jurídico e Compliance do Grupo Vedetta.</li>
  <li>Me Direito  e Educação (UFOP). Graduação em Direito  (UFPR) e Letras, (UFMG).Especialista em Psicopedagogia e PEI, Oficial do Exército na Reserva. 20 anos de Experiência em docência. </li>
  <li> Especialista em LGPD, Direito Digital e Compliance.</li>
  
  </ul>
  <p className="subtitle_list_ul" >
  <a target="_blank" className="link_ul_Latter" href="http://lattes.cnpq.br/1637344295042419">
  Latter
  </a>
  </p>

</div>
<div id="front"  className="img_card Joelma" Style="display: flex;width: 100%;background-position: center;height: 100%;background-repeat: no-repeat;background-size: cover;border-radius: 8px;aspect-ratio: 382 / 500;"></div>
</div>
</div>
  </div>
  
        </div>
        </div>
      
    
    

      </Slider>
      </Container>
    );
  }