const http = require('http'); 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(require("cors")()); 
app.use(bodyParser.json());


const connect = express();
const mysql = require("mysql");
const leads = require("./leads");
const { default: axios } = require('axios');





connect.use(express.json()); 
connect.use(require("cors")()); 
 
connect.post("/cadastrar",(req,res) =>{
    
  
    const name = req.body.name;
    const email = req.body.email;
    const celular = req.body.celular;
    const Site = req.body.Site;
    const number = req.body.number;
    const segmento = req.body.segmento;

  leads.create({
     name:name,
     email:email,   
     celular:celular,
     Site:Site,
     number:number,
     segmento:segmento

  }).then(function(){

 console.log("deu bom");

  }).catch(function(erro){
      console.log(erro);
  })

});
  
     
  

  /*    console.log(resultado);
     res.send(resultado); */








connect.listen(3060,() =>{
    console.log("OK");
})


app.get('/', (req, res, next) => {
  
})

const upload = require("multer")();
app.post('/send', upload.single('anexo'), (req, res, next) => { 
    const nome = req.body.nome;
    const email = req.body.email;
    const mensagem = req.body.mensagem;
    const celular = req.body.celular;
    const area = req.body.area;
    const cargo = req.body.cargo;
    const anexo = req.file;
    
    console.log("SEND = > " + nome + "email " + email + " mensagem  " + mensagem);
    require("./nodemail")(email, nome, mensagem, celular,area,cargo,anexo)
        .then(response => res.json(response))
        .catch(error => res.json(error));
})

const server = http.createServer(app); 
const PORT  = process.env.PORT || 3050
server.listen(PORT);
