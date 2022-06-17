const mailer = require("nodemailer");

module.exports = (email, nome, mensagem,celular,area,cargo) => {
    const smtpTransport = mailer.createTransport({

        host: 'smtp.hostinger.com',
        port:'465',
        secure: true, //SSL/TLS
        auth: {
            user: 'contato@grupovedetta.com.br',
            pass: 'Vedetta2022'
        }
    })

    const mail = {
        from: "contato@grupovedetta.com.br",
        to: email,
        subject: `${nome} te enviou uma mensagem`,
        html: `<h2>Nome:</h2> ${nome} <br> <h2>Celular:</h2> ${celular}<br> <h2>Area:</h2> ${area}<br><h2> Cargo:</h2> ${cargo}<br> <h2>Mensagem:</h2> ${mensagem}`
    }



    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mail)
            .then(response => {
                smtpTransport.close();
                return resolve(response);
            })
            .catch(error => {
                smtpTransport.close();
                
                return reject(error);
            });
    })
} 