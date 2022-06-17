import React from "react";
import Cabecalho from './cabecalho'
import rodape from "./rodape";
import App from './whatzap.js';
export default function Artigo(Link,texto,Saiba){
return (

    <div className="App" date-anime="up">
   
    <header Style="    background-color: rgb(108 117 125 / 0%);
    padding: 20px;    ">
<div className='bulding_conteiner' Style="display: inline-block;
    border: solid 1px black;
    background-color: white;
    padding: 0px;
    padding-bottom: 40px;
    margin-top: 0px;
    border-radius: 30px;
    width: 90%;
    margin: 10px;
    margin-bottom: -90px;">
       <img className="img_blog"src={Link}></img>
       <div className='link_descricao' Style="display: inline-block;
" ><p Style="width: 750px;
overflow-wrap: anywhere;
overflow: hidden;
display: inline-grid;
height: 259px;
padding: 0;
margin-top: 44px;
float: right;">A IMPORTÂNCIA DOS DADOS PESSOAIS E A LEI GERAL DE PROTEÇÃO DE DADOS (LGPD) 

       
        {texto}
        </p>
    
   
    
    
    </div>
    <Saiba/>
</div>
</header>

</div>

);
}