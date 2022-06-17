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
    allowNull: false,
},
email:{
    type:Sequelize.STRING,
    allowNull: false,
},
celular:{
    type:Sequelize.STRING,
    allowNull: false,
},
Site:{
    type:Sequelize.STRING,
    allowNull: false,       
},
number:{
    type:Sequelize.INTEGER,
    allowNull: false,     
},
segmento:{
    type:Sequelize.STRING,
    allowNull: false,     

},
});

leads.sync();

module.exports = leads;