import { CardGroup } from "reactstrap";
import Alexandre from "./img/Alexandre.jpg";
import Cassiane from "./img/minicurrículo_cassi.png";
import Cassiane_post from "./img/foto_cassiane.jpg";
import Joelma from "./img/joelma.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "reactstrap";
import { Card, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
function cardflip (){
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return(
<div>   

<style>
{`
#card_flip_group{
 
    margin-right: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    background-color: #1d1d1b;
}
#conteiner{
  display: flex;
  flex-direction: row;
  margin: 40px;
}

#front{
 color: black;
 border-radius:10px;
}

#true{
  background-color: dodgerblue;
  color: white;
  transition:all 1s linear;
  border-radius:10px;
}
.makeStyles-Link-35{
  text-decoration:none;
}

#inner{
 position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius:10px;
  
}
#front, #true {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  
}
 #card:hover #inner {
  transform: rotateY(180deg);
}.dentro{
  padding: 5%;
  padding-left: 10%;
  padding-right: 10%;
  background-color: #9b801b;
}
#true{
  background-color: white;
  color: black;
  transform: rotateY(180deg);
  
} .list_ul{
 
  list-style: none;
  margin: auto;
  margin-right: 23px;
  margin-top: 10px;
}



.title_list_ul{
  margin-top:20px;

}.link_ul_LinkedIn{
display:inline-block;
font-size:1rem;
}
.link_ul_Latter{
display:inline-block;
font-size:1rem;
}
.subtitle_list_ul{
  
  display:inline-block;
  margin-right:10px;
  justify-content:left;
}
.img_card{
  
}

`}</style>

<Container id="card_flip_group">




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
<div id="front" className="img_card Alexandre alexandre_foto" Style="display: flex; width: 100%; height: 100%;  background-repeat: no-repeat;background-size: 225% 320%;background-position-x: 50%;background-position-y: 28%;border-radius: 8px; aspect-ratio: 382 / 500;"></div>

</div>
</div>
 

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
<div id="front"  className="img_card Joelma" Style="display: flex;background-position: center;width: 100%;height: 100%;background-repeat: no-repeat;background-size: cover;border-radius: 8px;aspect-ratio: 382 / 500;"></div>
</div>
</div>




</Container>
</div>     

);    
}

export default cardflip;