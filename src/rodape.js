import React from 'react'
import facebook from './img/facebook.png';
import linkedin from './img/linkedin.png';
import instagram  from './img/instagram.png';
import Logo_dois from './img/PNG/Vedetta-Logomarca_Prancheta 1 cópia 2.png';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
const rodape = props =>
{
  return ( 
    <div id="div_footer">
      <div Style="       /* margin-right: -1px; */
    padding-top: 110px;
    padding-bottom: 13px;
    background-color: rgb(0 79 128);
}" data-anime="up">  
      <style>
        {` .Rodape{           
           width: 100%;
           bottom: 0px;
           background-color: #004f80;
           
           color: #f0f8ff;
           width: 100%;
           height: 100px;
           text-align: center;
           line-height: 100px;
           }.divisor{
            border-top: 1px black;
           background-color: #004f80;
           color: #f0f8ff;
            width: 100%;
            height: 180px;
            }.icones{
              border-top: 1px black;
              background-color: #c6c6c6;
              color: white;
              width: 100%;
              height: 100px;
              } .IMG1{
                width: 30px;
                float: right;
                right: 0px;
                bottom: 0;
                display: inline-block;
                margin: auto;
            }.IMG2{
              width: 30px;
              float: right;
              margin-left: 10px;
              right: 0px;
              bottom: 0;
              display: inline-block;
              }.IMG3{
                width: 120px;
               
                float: left;
                margin-left: 45%;            
                margin-top: -45px; 
                right: 10px; 
                }.TEXT1{
            width: 25%;
            display: inline-block; 
            }
            .TEXT2{
            width: 25%;
            display: inline-block;           
            }.TEXT3{
            width: 25%;
            display: inline-block;           
            }.TEXT4{
            width: 25%;
            display: inline-block;           
              }
              .TEXT5{
                height: 55%;
                
              }
              .texto-divisor{
                margin-bottom: 20px;
                margin-top: 20px;
                font-size: 15px;
              }
              .texto-rodape{
                text-align: center;
                color:white;
                width: 100%;
                
              }
              .icones-sociais{
                margin-top: -35px;
                height: 20px;
                left: 15px;
                right: 0px;
                position: absolute;
                display: inline-flex;
              }
              .IMG____log{
                width: 120px;
                margin-left: auto;
                margin-right: auto;
                margin-top: -35px;

              }
            `}
</style>
<div className='divisor'>
<div>
<Link to="/Formulario" Style="text-decoration:none">
  <Button value="
Fale com um especialista
    " Style="
    margin-right: 2%;
    margin-left: 1.5%;
    margin-top: -165px;
    margin-bottom: auto;
    border-radius: 30px;
    background-color: #b6892d;
    border: none;
    color: #fff;
    cursor: pointer;
   
">

Fale com um especialista
  </Button>
  </Link>
  </div> 
  <div Style="    margin-top: -25px;
    margin-left: 0%;" >
 
<p className='texto-rodape'>E-mail: contato@grupovedetta.com.br </p>
<p className='texto-rodape'>Whatsapp: (31) 99675-8686 </p>


</div>
<div Style="
       display: inline-flex;
       /* bottom: 1000%; */
       margin-left: 0%;
       display: inline-flex;
       margin-top: 70px;
       margin-left: auto;
       margin-right: auto;
">    
<a href='https://www.facebook.com/grupovedetta'>
<img className = "IMG1" src={facebook} alt="link "/>
</a>
<a href='https://www.linkedin.com/company/grupo-vedetta/about/?viewAsMember=true'>
<img className = "IMG2" src={linkedin} alt="link "/>
</a>
<a href=''>
<img className = "IMG2" src={instagram} alt="link "/>
</a>
</div>

    </div>
    <div className='icones' Style="    border-top: 1px black;
    background-color: #c6c6c6;
    color: white;
    width: 100%;
    margin-top: 10px;
    height: 10%;
    margin-bottom: -29px;">
  
  <a href="#" className = "IMG3LINK">   
  <img className = "IMG____log" src={Logo_dois} alt="link "/>
  </a>
  <p Style="        border-top: 1px black;
  background-color: #c6c6c6;
  color: black;
  width: 100%;
  margin-top: -30px;
  height: 45px;">@2022 Grupo Vedetta</p>
  </div>


  </div>
    
    </div> 
    
  

  )
}
export default rodape;
