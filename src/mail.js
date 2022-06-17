const Sequelize = require('sequelize');
const db = require('./db');

const mail =  db.define('mail',{
        id:{
        
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
        
        },
        name:{
            type:Sequelize.STRING,
            allowNull: true, allowNull: false,
        },
        email:{
            type:Sequelize.STRING,
            allowNull: true, 
        },
        celular:{
            type:Sequelize.STRING,
            allowNull: true, 
        },
        area:{
            type:Sequelize.STRING,
            allowNull: true,        
        },
        cargo:{
            type:Sequelize.STRING,
            allowNull: true,      
        },
        mensagem:{
            type:Sequelize.STRING,
            allowNull: true, allowNull: false,
        },
        });


        mail.sync();
      
    
        module.exports = mail;