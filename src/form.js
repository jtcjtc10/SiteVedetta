import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React,{useState} from 'react';
import './App.css';
import axios from 'axios';
import { loadReCaptcha } from 'react-recaptcha-google';
import Select from 'react-select';
import ReCAPTCHA from 'react-google-recaptcha';
import App from './whatzap';
import ReactDOM from "react-dom";

class App1 extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: "not fired",
      value: "[empty]",
      load: false,
      expired: "false"
    };
    this._reCaptchaRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
  }

  handleChange = value => {
    console.log("Captcha value:", value);
    this.setState({ value });
    // if value is null recaptcha expired
    if (value === null) this.setState({ expired: "true" });
  };

  asyncScriptOnLoad = () => {
    this.setState({ callback: "called!" });
    console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
  };

  render() {
    const { value, callback, load, expired } = this.state || {};
    return (
      <div className="App1">
        <h1>
          <a
            href="https://github.com/dozoisch/react-google-recaptcha"
            target="_blank"
          >
            react-google-recaptcha
          </a>
          : 2.1.0
        </h1>
        <h2>
          NOTE: initial load delayed <em>{DELAY / 1000}sec</em> to demonstrate
          callback
        </h2>
        <h3>Recaptcha loaded callback: {callback}</h3>
        <h5>Recaptcha value: {value}</h5>
        <h5>Expired: {expired}</h5>
        {load && (
          <ReCAPTCHA
            style={{ display: "inline-block" }}
            theme="dark"
            ref={this._reCaptchaRef}
            sitekey={TEST_SITE_KEY}
            onChange={this.handleChange}
            asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
        )}
      </div>
    );
  }
}

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
  var url = document.location.toString().toLowerCase();
  var url_lenght = url.length;
  Object.keys(campos).forEach(key => formData.append(key, campos[key]));

  axios.post(`https://grupovedetta.com.br:3000/send`, 
  formData,
  {
    headers: {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
    }
  })
.then(response => {  })

axios.post(`https://grupovedetta.com.br:3030/send`, 
formData,
{ 
    nome: campos.nome,
    email: campos.email,
    celular: campos.celular,
    area: campos.area,
    cargo: campos.cargo,
    mensagem: campos.mensagem,
          
})
.then(response => {  })

}
function handleFormSubmit(event){ 
  alert('Recebemos suas informações entraremos em contato o mais rapido possivel: ');
  event.preventDefault(); 
  console.log( recaptchaRef); 
  send(campos);

}

  const [campos, setCampos] = useState({
    nome: '',
    email: '',
    celular: '',
    area: '',
    cargo: '',
    mensagem: ''
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
 
  .borda-bottom::after {
    display: block;
    content: " ";
    color: rgb(42 41 41);
    position: absolute;
    border-bottom: solid;
    content-visibility: visible;
    width: 40px;
}

 
  `}</style>
  return (
    <div className=" container" Style="    width: 100%;
    
    margin-left: 5%; 
    margin-bottom: 25px;
    /* border-radius: 5px; */
    background-color: rgb(242 242 242 / 43%);
    padding: 20px;
    padding-top:20px;
    display: inline-block;
    position: relative;
    font-size: 15px;
    margin-top: 5%;"date-anime="up">
          <div  Style="
        text-align: left;
        display: inline-block;
        width: 85%;
        float: left;
        margin-left: 5%;
        margin-right: auto;
        margin-top: 1%;
        color: black;
        margin-bottom: 15px;
      
" id="center" class="borda-bottom">Entre em Contato</div>
      <form date-anime="left" onSubmit={handleFormSubmit }>
        <label className="label_form" for="nome" Style="
    text-align: left;
    display: inline-block;
    width: 40%;
    float: left;
    margin-left: 5%;
    margin-right: auto;
">Nome</label><label className="label_form" for="nome" Style="
text-align: left;
display: inline-block;
width: 40%;
float: left;
margin-left: 5%;
margin-right: auto;
">Celular</label>
<input type="text" id="nome" name="name" placeholder="" required onChange={handleInputChange} Style="
    display: inline-block;
    height: 45px;
    width: 40%;
    float: left;
    margin-left: 5%;
    margin-right: auto;
    margin-top: 1%;
"/>
<input type="text" id="celular" name="celular" maxlength="15" pattern="\(\d{2}\)\s*\d{5}-\d{4}" required onChange={handleInputChange} Style="
   display: inline-block;
   height: 45px;
   width: 40%;
   float: left;
   margin-left: 5%;
   margin-right: auto;
   margin-top: 1%
"/>
    <label className="label_form" for="celular" Style="
    text-align: left;
    display: inline-block;
    width: 85%;
    float: left;
    margin-left: 5%;
    margin-right: auto;
    margin-top: 1%;
">Email</label>
<input type="email" id="email" name="email" placeholder="" required onChange={handleInputChange} Style="
    display: inline-block;
    height: 45px;
    width: 85%;
    float: left;
    margin-left: 5%;
    margin-right: auto;
    margin-bottom: 10px;
    margin-top: 1%;
"/>
        <label className="white label_form"htmlFor="area"Style="
    text-align: left;
    display: inline-block;
    width: 40%;
    float: left;
    margin-left: 5%;
    margin-right: auto;
">Área</label>      
        <label className="white label_form"htmlFor="cargo"Style="
    text-align: left;
    display: inline-block;
    width: 40%;
    float: left;
    margin-left: 5%;
    margin-right: auto;
    margin-top: 1%;
">Cargo</label>
        <div Style="display: inline-block;
    height: 45px;
    width: 40%;
    float: left;
    margin-left: 5%;
    margin-right: auto;"><Select id="area" name="area" placeholder=''options={options1} onChange={handleChange1} /></div>
       <div Style="display: inline-block;
    height: 45px;
    width: 40%;
    float: left;
    margin-left: 5%;
    margin-right: auto;"><Select id="cargo"placeholder='' name="cargo" options={options}  onChange={handleChange} />  </div>    
        <label className="white label_form"htmlFor="mensagem"Style="
  text-align: left;
  display: inline-block;
  width: 80%;
  float: left;
  margin-left: 5%;
  margin-right: auto;
">Como podemos te ajudar?</label>
        <textarea id="mensagem" name="mensagem"  className="textArea" Style="display: inline-block;
    height: 80px;
    width: 85%;
    float: left;
    margin-left: 5%;
    margin-right: auto;
    margin-bottom: 10px;
    margin-top: 1%;" onChange={handleInputChange}></textarea>
      <div Style="width: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;">
        <input type="submit" value="Enviar"  />
        <div Style="width: 300px;
    display: block;
    margin-left: -90%;
    margin-right: auto;">
    {App1} 
        </div>
        </div>
        
      </form>
      
    </div>
    
  );
}

export default Formulario;
