
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  navbar  from './cabecalho';
import "../node_modules/video-react/dist/video-react.css";
import App from './whatzap.js';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
import rodape from './rodape.js';
import Formulario from './form_trabalhe.js'; 
import Link_b from './img/link_b1.jpg';
import Link_b2 from './img/link_b2.jpg';
import Artigo from  './Artigo1';
import { Link } from 'react-router-dom';
export const Formulario2 = () => {
 
 
  return (
   <div>
       { Cabecalho()} 
     <div className="principal" date-anime="up" Style={""}>
      
       <div id="div_white" Style="margin-top: 20px;"width={"100%"}backgroundColor={"white"} >
        <div className= "f"data-anime="up"> 
        {Formulario()}
       
       
        </div>
        </div>
      
      <footer >
      { rodape()}
      {App()}
      </footer>
    </div>
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

