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
import Link_b from './img/link_b1.jpg';
import Artigo from  './Artigo1';
import { Link } from 'react-router-dom';

export const Artigo_2 = () => {
 
  return (
    <div className="App" date-anime="up">
       { Cabecalho()} 
      <Helmet>
                <script src="./script.js"></script>

      </Helmet>
      <header data-anime="up"className="App-header"Style={"background: url(/static/media/Blog_background_auto_x2_auto_x2.efc1280e312386107bfd.jpg);background-size:cover;margin-top:200px"}>
        <div className='Conteiner_blog'><div className='Conteiner_blog2' >
      <h2>A IMPORTÂNCIA DOS DADOS PESSOAIS E A LEI GERAL DE PROTEÇÃO DE DADOS (LGPD)</h2>
      <p>Os dados pessoais são de extrema relevância na era digital e do Big Data. Já foram considerados o “novo petróleo”, ou DATA IS THE NEW OIL” - HUMBY, clive 2006.  
Os dados de titulares são coletados o tempo todo on-line e off-line e as pessoas, antes da vigência da Lei Geral de Proteção de Dados (LGPD), não tinham noção dessa quantidade de dados que as empresas mantinham em seus arquivos, digitais ou não, e muito menos garantias do que seria feito desses dados. Esse cenário mudou completamente após a vigência dessa recente lei brasileira.   
Por outro lado, as empresas também não detinham a técnica da governança desses dados, pois não havia norma que regulasse ou orientasse as empresas com relação ao cuidado necessário para que eles não fossem utilizados de forma inapropriada, ou como deveriam proceder a ataque de hacker, caso houvesse, ou vazamentos, podendo acarretar inúmeras responsabilidades extrajudiciais e judiciais para as empresas. 
</p>
<img src={Link_b} />
<p>
<small>Imagem disponível em Banco de Imagens gratuitas: Lgpd Banco de Imagens e Fotos de Stock - iStock (istockphoto.com)</small>
<p>
Assim, a Lei Geral de Proteção de dados, ao contrário do que muitos pensam, não passou  a vigorar a fim de  quebrar ou punir empresas. Muito pelo contrário, veio estipular  “as regras do jogo”, veio estabelecer segurança jurídica para ambas as partes envolvidas, trazendo inovações, avanços tecnológicos, promovendo uma melhor experiência do usuário com a empresa, por meio de uma relação de total transparência e segurança jurídica.   
</p>
<p>
Mas afinal, por que há tanto interesse em dados pessoais? Os dados possuem valor inestimável para as empresas, pois, a partir deles, é possível traçar perfil dos usuários e consumidores, criar ou potencializar estratégias de vendas de produtos e serviços – o que é conhecido como inteligência de mercado, dados podem ser vendidos e compartilhados ou trocados por outros interesses. Os dados do usuário permitem que se tenha ciência do comportamento de consumo das pessoas, a fim de agir estrategicamente sobre esse comportamento.  
</p>
<p>
Outros motivos não muito nobres, os dados podem servir de moeda de troca para Hackers que sequestram dados de empresas em troca de moedas criptografadas. Ou ainda, os dados poderiam vazar a qualquer momento, prejudicando tanto a empresa quanto seus usuários. Ademais a manipulação de dados via algoritmos pode influenciar pessoas, alterar os rumos e a ordem em uma sociedade, inclusive eleições, como ocorreu nas eleições americanas, em que o Presidente Donald Trump assumiu o poder mediante vazamento de dados do Facebook e manipulações, o que ocasionou o escândalo envolvendo a empresa e um processo milionário.   
</p>
<p>
Diante desse cenário, foi primordial a criação de uma lei que desse segurança jurídica para usuários e empresários. A União Europeia foi a primeira a tomar providências nesse sentido. O Brasil, por sua vez, foi rápido ao também aprovar uma lei que garantisse a segurança de todos com relação aos dados de titulares.  
</p>
<p>
Assim, a LGPD veio uniformizar e regular o tratamento de dados do titular, criando as regras do jogo que servirão de proteção para os titulares e para as empresas, pois estamos vivendo a era da sociedade da informação, como uma forma moderna de organização social.  
</p>
<p>
Atualmente, a informação é o elemento dominante no cenário, que não possui barreiras geográficas, de tempo ou obstáculos físicos. A tecnologia veio romper com padrões antigos impostos durante milhares de anos. Hoje, a empresa que não inova, não acompanha ou se adapta às novas regras, tenderá a perder competitividade e mercado, pois a informação é o elemento essencial para o desenvolvimento da economia.   
</p>
<p>
Daí a necessidade de as empresas se adequarem urgentemente à LGPD, sob pena de perderem mercado por não estabelecerem metas de inovações ou por não oferecem segurança aos seus usuários, além de responderem juridicamente ou extrajudicialmente pela falta de governança dos dados ou pela não implantação da LGPD. 
</p>
<p>
Os dados se transformam em informações e são o principal ativo de toda e qualquer empresa. São o novo combustível para a movimentação do negócio. Mas somente a informação para as empresas também não é suficiente, pois cada empresa, para ser ainda mais competitiva, além de oferecer segurança aos seus usuários, terá também de extrair dessas informações o conhecimento necessário para estabelecer novas metas, nova postura, nova cultura com relação à LGPD e estratégias de marketing e de gestão. 
</p>
<p>
Portanto, somente a informação não é a garantia de que alavancará a eficiência na atividade empresarial, como também não garante uma inteligência empresarial. Ela passa a gerar valor quando as informações são processadas e transformadas em conhecimento aplicado. Daí o fato de o mercado valorizar tanto o profissional que consegue interpretar análises estatísticas que foram extraídas dos dados, ou ainda a valorização de uma consultoria que consegue analisar e gerenciar os riscos da empresa com relação à coleta e tratamento de dados. 
</p>
<p>
Dessa forma, percebe-se que a informação sozinha ou apenas a segurança oferecida aos usuários, por si só, não é o que gera eficiência empresarial, mas sim a transformação dessas informações em conhecimento. Imagine então a empresa que, deliberadamente, não conhece a LGPD, a sua importância e seu alcance. Esta já está atrás das demais no sentido de competitividade, pois vivemos a era dos dados e das informações e tudo isso precisa estar regulado em forma de Lei. E esta Lei já existe, embora sua importância e aplicabilidade sejam desconhecidas por muitos.  
</p>
<p>
A Lei Geral de Proteção de dados no Brasil é a Lei de número 13.709, de 14/09/2018, mas que passou a valer em setembro de 2020 e, somente em agosto de 2021, passou a ter a prerrogativa de punir as empresas que ainda não se adequaram à LGPD e, principalmente, à nova cultura de proteção de dados. A nossa lei foi inspirada na GDPR (General Data Protection Regulation) que entrou em vigor em 2018 na União Europeia, trazendo muitos impactos para empresas e consumidores que deverão estar adequados à inovação que promoverá competitividade no mercado, tanto nacional, quanto internacional.  
</p>


</p>
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



function Cabecalho() 
{
  return (
   <header>
        
     <nav> {navbar()}</nav>
  
 
   </header>
  );
}

