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
        subject: `${nome} te enviou uma mensagem`,
        html: `<h2>Nome:</h2> ${nome} <br><h2>Email: </h2> ${email}<br> <h2>Celular:</h2> ${celular}<br> <h2>Area:</h2> ${area}<br><h2> Cargo:</h2> ${cargo}<br> <h2>Mensagem:</h2> ${mensagem}`
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
              console.log(smtpTransport);
              return console.log(response);
          })
          .catch(error => {
              smtpTransport.close();
              console.log(smtpTransport);
              return console.log(error);
          });
  })
}
