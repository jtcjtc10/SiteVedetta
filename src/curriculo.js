const Sequelize = require('sequelize');
const db = require('./db');

const curriculo =  db.define('curriculo',{
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
        celular:{
            type:Sequelize.STRING,
            allowNull: true, 
        },
      
        anexo:{
            type:Sequelize.STRING,
            allowNull: true, allowNull: false,
        },
        });


        curriculo.sync();
      
    
        module.exports = curriculo;