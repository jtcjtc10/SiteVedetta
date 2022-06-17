import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React,{useState} from 'react';
import "../node_modules/video-react/dist/video-react.css";
import './App.css';
import axios from 'axios';
import { loadReCaptcha } from 'react-recaptcha-google';
import Select from 'react-select';
import rodape from './rodape.js';
import  navbar  from './cabecalho';
import App from './whatzap.js';


export const Formulario_leads = () => {
 
 
    return (

      <div className='App'>
       
      <div className="" id="leadsss" date-anime="up" Style={"background-color: rgb(118 155 173);"}>
       
      
       <div id="center" Style="    color: #f2f2f2;">Receba um de nossos e-books
    </div>
         <div  className='leads_form' Style="
         margin-top:36px;
    width: 100%;
    padding: 0%;
    padding-bottom: 47rem;
    padding-top: 3rem;
    height: 360px;
    
    "width={"100%"}backgroundColor={"white"}>
          <div className= "f"data-anime="up"> 
          
          {Formulario2()}
  
         
          </div>
          </div>
        
       
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

  function Formulario2()  {
  
    const options = [
      { value: 'Administrador', label: 'Administrador' },
      { value: 'Analista', label: 'Analista' },
      { value: 'Auxiliar Administrativo', label: 'Auxiliar Administrativo' },
      { value: 'Consultor', label: 'Consultor' },
      { value: 'Coordenador', label: 'Coordenador' },
      { value: 'Diretor', label: 'Diretor' },
      { value: 'Desenvolvedor', label: 'Desenvolver' },
      { value: 'Designer', label: 'Designer' },
      { value: 'Engenheiro', label: 'Engenheiro' },
      { value: 'Estagiário', label: 'Estagiário' },
      { value: 'Gerente', label: 'Gerente' },
      { value: 'Gestor', label: 'Gestor' },
      { value: 'Instrutor', label: 'Instrutor' },
      { value: 'Professor', label: 'Professor' }, 
      { value: 'Programador', label: 'Programador' },
      { value: 'Profissional liberal', label: 'Profissional liberal' },
      { value: 'Recepcionista', label: 'Recepcionista' },
      { value: 'Secretária', label: 'Secretária' },
      { value: 'Supervisor', label: 'Supervisor' },
      { value: 'Técnico', label: 'Técnico' },
      { value: 'Trabalhador autônomo/ artesão (com formalização por MEI ou de maneira informal)', label: 'Trabalhador autônomo/ artesão (com formalização por MEI ou de maneira informal)' },
      { value: 'Trainee', label: 'Trainee' },
      { value: 'Vendedor', label: 'Vendedor' },
    ];
    const options1 = [
      { value: 'Alimentos', label: 'Alimentos' },
      { value: 'Automotivos', label: 'Automotivos' },
      { value: 'Bebidas', label: 'Bebidas' },
      { value: 'Calçados', label: 'Calçados' },
      { value: 'Consultoria e assessoria', label: 'Consultoria e assessoria' },
      { value: 'Contabilidade', label: 'Contabilidade' },
      { value: 'Cosméticos', label: 'Cosméticos' },
      { value: 'Educação', label: 'Educação' },
      { value: 'Eletrodomésticos', label: 'Eletrodomésticos' },
      { value: 'Eletrônicos', label: 'Eletrônicos' },
      { value: 'Estética e bem estar', label: 'Estética e bem estar' },
      { value: 'Farmácia', label: 'Farmácia' },
      { value: 'Gráfica', label: 'Gráfica' },
      { value: 'Hortifrutigranjeiro', label: 'Hortifrutigranjeiro' },
      { value: 'Imobiliário', label: 'Imobiliário' },
      { value: 'Jurídico', label: 'Jurídico' },
      { value: 'Lazer e entretenimento', label: 'Lazer e entretenimento' },
      { value: 'Medicamentos', label: 'Medicamentos' },
      { value: 'Metalurgia', label: 'Metalurgia' },
      { value: 'Móveis', label: 'Móveis' },
      { value: 'Odontologia', label: 'Odontologia' },
      { value: 'Padaria e confeitaria', label: 'Padaria e confeitaria' },
      { value: 'Papelaria e suprimentos', label: 'Papelaria e suprimentos' },
      { value: 'Presentes', label: 'Presentes' },
      { value: 'Restaurante e lanchonete', label: 'Restaurante e lanchonete' },
      { value: 'Roupas e acessórios', label: 'Roupas e acessórios' },
      { value: 'Saúde (especialidades médicas, exames)', label: 'Saúde (especialidades médicas, exames)' },
      { value: 'Supermercado', label: 'Supermercado' },
      { value: 'Terceirização de serviços empresariais', label: 'Terceirização de serviços empresariais' },
      { value: 'Transportes', label: 'Transportes' },
      { value: 'Turismo', label: 'Turismo' },
      { value: 'Tecnologia', label: 'Tecnologia' },


    
    ];
    const options2 = [
      { value: '1 a 3 Funcionários', label: '1 a 3 Funcionários' },
      { value: '3 a 5 Funcionários', label: '3 a 5 Funcionários' },
      { value: '5 a 10 Funcionários', label: '5 a 10 Funcionários' },
      { value: '10 ou mais Funcionários', label: '10 ou mais Funcionários' },
    
    ];
  
  
  function send(campos){
    const formData = new FormData();
    var url = document.location.toString().toLowerCase();
    var url_lenght = url.length;
    url = url.slice(0,url_lenght -1);
    Object.keys(campos).forEach(key => formData.append(key, campos[key]));
  axios.post(`https://grupovedetta.com.br:3030/cadastrar`,
  formData,
  { 
      name: campos.name,
      email: campos.email,
      celular: campos.celular,
      Site: campos.Site,
      number: campos.number,
      segmento: campos.segmento,
      
    }).then(response => {  });
  }

function handleFormSubmit(event){ 
  alert('Recebemos suas informações obrigado!');
  event.preventDefault(); 
 
  send(campos);
}

  const [campos, setCampos] = useState({
    name: '',
    email: '',
    celular: '',
    Site: '',
    segmento: '',
    number:'',
});
function handleInputChange(event){
  if(event.target.name === "celular"){
  mascaraTelefone(event.target.value);
  }
    if(event.target.name === "anexo")
      campos[event.target.name] = event.target.files[0];
    else
      campos[event.target.name] = event.target.value;
 
     
   
    setCampos(campos);
}
function handleChange(event){
  campos.segmento = event.value;

  setCampos(campos);
}
function handleChange1(event){
  campos.Site = event.value;

  setCampos(campos);
}
function handleChange2(event){
  campos.number = event.value;

  setCampos(campos);
}

const tel = document.getElementById('celular');
const mascaraTelefone = (valor) => {
  valor = valor.replace(/\D/g, "")
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
  tel.value = valor // Insere o(s) valor(es) no campo
}

  <style>{`.container{
    width: 525px;
    height: 200px;
    margin-right: 20px;
    margin-left: auto;
  }
 
  `}</style>
  return (
    <div className='nome_formulario' date-anime="up">
      <form date-anime="left" onSubmit={handleFormSubmit} >
        <label className="label_form"htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="name" placeholder="" onChange={handleInputChange} />
        <label className="label_form"htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="" onChange={handleInputChange}/>
        <label className="label_form"htmlFor="celular">Celular</label>
       <input type="text" id="celular" name="celular" maxlength="15" pattern="\(\d{2}\)\s*\d{5}-\d{4}" required onChange={handleInputChange} />
       <label className="label_form"htmlFor="Number">Numero de funcionarios</label>
       <Select placeholder=" "id="number" name="number" options={options2} onChange={handleChange2} />
        <label className="label_form"htmlFor="area">Area de Atuação</label>      
        <Select placeholder=" " id="area" name="site" options={options1} onChange={handleChange1} />
        <label className="label_form"htmlFor="cargo">Selecione seu Cargo ou o mais proximo</label>
        <Select id="cargo"placeholder=" " name="cargo" options={options} onChange={handleChange} />
       
        <input type="submit" Style="margin-top:20px" value="Enviar"  />
        
      </form>
      
    </div>
    
  );
}

export default Formulario_leads;
