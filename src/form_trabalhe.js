import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React,{useState} from 'react';
import './App.css';
import axios from 'axios';
import { loadReCaptcha } from 'react-recaptcha-google';
import Select from 'react-select';
import ReCAPTCHA from 'react-google-recaptcha';
import App from './whatzap';



function Formulario()  {
  
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
  
  
  function send(campos){
  const formData = new FormData();
  Object.keys(campos).forEach(key => formData.append(key, campos[key]));
  axios.post(`https://grupovedetta.com.br:3010/trabalheconosco`, 
  formData,
  {
    headers: {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
    }
  })
.then(response => {})


axios.post(`https://grupovedetta.com.br:3030/trabalheconosco`,
{ 
      nome: campos.name,
      celular: campos.celular,
      anexo: campos.anexo,
    })
.then(response => {})

}

function handleFormSubmit(event){ 
  alert('Recebemos suas informações entraremos em contato o mais rapido possivel: ');
  event.preventDefault(); 

  send(campos);
  
}

  const [campos, setCampos] = useState({
    nome: '',
    email: '',
    celular: '',
    area: '',
    cargo: '',
    mensagem: '',
    anexo:''
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
  campos.cargo = event.value;

  setCampos(campos);
}
function handleChange1(event){
  campos.area = event.value;

  setCampos(campos);
}
function onChange(value) {

}
const tel = document.getElementById('celular');
const mascaraTelefone = (valor) => {
  valor = valor.replace(/\D/g, "")
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
  tel.value = valor // Insere o(s) valor(es) no campo
}

const recaptchaRef = React.createRef();
  <style>{`.container{
    width: 525px;
    height: 200px;
    margin-right: 20px;
    margin-left: auto;
  }
 
  `}</style>
  return (
    <div className=" containerrs Formredu " date-anime="left">
      <form date-anime="left" onSubmit={handleFormSubmit }>
      <div  Style="
    color: white;
    /* background-color: white; */
    width: 100%;
    position: relative;
    margin-top: 0;
    margin-right: auto;
    margin-left: 0;
    /* padding-top: 5%; */
    height: 51px;
    margin: 10px 0 0 0 auto;
    /* padding-left: 10px; */
" id="center">Trabalhe Conosco</div>
        <label Style='  color:white;'className="label_form"htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="" onChange={handleInputChange} />
        <label Style='  color:white;'className="label_form"htmlFor="celular">Celular</label>
       <input type="text" id="celular" name="celular" maxlength="15" pattern="\(\d{2}\)\s*\d{5}-\d{4}" required onChange={handleInputChange} />
        <label Style='  color:white;'className="label_form"htmlFor="mensagem">Currículo
        </label>
        <input Style='  color:white;'Style="background-color: white;" type="file" id="anexo" name="anexo" placeholder="" onChange={handleInputChange} />
        <input type="submit" value="Enviar"  />

      </form>
      
    </div>
    
  );
}

export default Formulario;
