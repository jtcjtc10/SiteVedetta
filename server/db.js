const { Sequelize } = require('sequelize');


   
const sequelize = new Sequelize("u182789341_bDM9i","u182789341_4Onkw","Vedetta2022",{
host: 'sql571.main-hosting.eu',
dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("sucesso");
}).catch(function(){
 console.log("erro");
})

module.exports = sequelize;