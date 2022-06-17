
const express = require('express');
const app = express();
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const trabalhe = express();
const bodyParser = require('body-parser');
app.use(require("cors")()); 
app.use(bodyParser.json());
trabalhe.use(require("cors")()); 
trabalhe.use(bodyParser.json());
const { default: axios } = require('axios');
const upload2 = require("multer")();
const connect = express();
connect.use(express.json()); 
connect.use(require("cors")()); 

const upload = require("multer")();
var fs = require('fs'); 
var https = require('https');
var options = { 
    key: fs.readFileSync('./server-key.pem'), 
    cert: fs.readFileSync('./server-cert.pem'), 
    ca: fs.readFileSync('./apig-cert.pem'), 
    requestCert: false, 
    rejectUnauthorized: true
};

app.post('/send', upload.single('anexo'), (req, res, next) => { 
    const nome = req.body.nome;
    const email = req.body.email;
    const mensagem = req.body.mensagem;
    const celular = req.body.celular;
    const area = req.body.area;
    const cargo = req.body.cargo;
    const anexo = req.file;

    console.log("CONTATO=> " , email, nome, mensagem, celular,area,cargo,anexo);
    require("./nodemail")(email, nome, mensagem, celular,area,cargo,anexo)
        .then(response => res.json(response))
        .catch(error => res.json(error));
})

app.post('/trabalheconosco', upload.single('anexo'), (req, res, next) => { 
    const nome = req.body.nome;
    const email = req.body.email;
    const mensagem = req.body.mensagem;
    const celular = req.body.celular;
    const area = req.body.area;
    const cargo = req.body.cargo;
    const anexo = req.file;
    console.log("TRABALHE => " , email, nome, mensagem, celular,area,cargo,anexo);
    require("./trabalheconosco_node")(email, nome, mensagem, celular,area,cargo,anexo)
        .then(response => res.json(response))
        .catch(error => res.json(error));
})



https.createServer(options, app).listen(3000);
https.createServer(options,trabalhe).listen(3010);





/*((((((((((((((((((((((((      ))))))))))))))))))))))))()*/



const leads = require("./leads");


connect.post("/cadastrar",upload2.single('anexo'), (req, res, next) => { 
    
  
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
      
              }).catch(function(erro){
              
              })

});
  







//////////////////////////////////////////////////////////////




const mail = require("./mail");



const curriculo = require("./curriculo");
connect.post("/trabalheconosco",upload.single('anexo'), (req, res, next) => { 
    const nome = req.body.nome;
        const celular = req.body.celular;
        const anexo = req.file;
         curriculo.create({
          name:nome,
          celular:celular,
          anexo:anexo,
        }).then(function(){
    
          }).catch(function(erro){
            
          })
        
    
    });



const upload1 = require("multer")();
connect.post("/send",upload1.single('anexo'), (req, res, next) => { 
const nome = req.body.nome;
    const email = req.body.email;
    const mensagem = req.body.mensagem;
    const celular = req.body.celular;
    const area = req.body.area;
    const cargo = req.body.cargo;
    mail.create({
      name:nome,
      email:email,   
      celular:celular,
      area:area,
      cargo:cargo,
      mensagem: mensagem
    }).then(function(){

      }).catch(function(erro){
        
      })
    

});



https.createServer(options, connect).listen(3030);



