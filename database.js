const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', 
});
async function testDatabaseConnection() {
    try {
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados SQLite estabelecida com sucesso.');
    } catch (error) {
          
console.error('Erro ao conectar ao banco de dados:', error);
}}
        
   testDatabaseConnection();
   
module.exports = sequelize;
