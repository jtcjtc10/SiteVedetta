const mailer = require("nodemailer");

module.exports = (email, nome, mensagem,celular,area,cargo,anexo) => {
    const smtpTransport = mailer.createTransport({
      
    
       
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true, //SSL/TLS
        
        auth: {
            user: 'admin@grupovedetta.com.br',
            pass: '@Vedetta10',
        },
      
    })
    
    const mail = {
        from: "admin@grupovedetta.com.br",
        to: "contato@grupovedetta.com.br",
        subject: `${nome} te enviou um currículo`,
        html: `<h2>Segue o currículo de ${nome} </h2> `
    }

    if(anexo){
      console.log(anexo);
      mail.attachments = [];
      mail.attachments.push({
          filename: anexo.originalname,
          content: anexo.buffer
      })
  }
  
  return new Promise((resolve, reject) => {
      smtpTransport.sendMail(mail)
          .then(response => {
              smtpTransport.close();
              return console.log(response);
          })
          .catch(error => {
              smtpTransport.close();
              return console.log(error);
          });
  })
}
