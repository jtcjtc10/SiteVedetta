const Sequelize = require('sequelize');
const db = require('./db');


const leads = db.define('leads',{
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
Site:{
    type:Sequelize.STRING,
    allowNull: true,        
},
number:{
    type:Sequelize.STRING,
    allowNull: true,      
},
segmento:{
    type:Sequelize.STRING,
    allowNull: true,     

},
});


leads.sync();

module.exports = leads;
