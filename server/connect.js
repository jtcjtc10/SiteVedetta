const express = require('express');
const connect = express();
const mysql = require("mysql");
const leads = require("./leads")





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


connect.get("/", (req, res) => {

});



connect.listen(3060,() =>{
    console.log("OK");
})