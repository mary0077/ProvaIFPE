const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('jogador', 'aluno', 'ifpe2023', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso!');
  })
  .catch((error) => {
    console.log('Erro ao conectar ao banco de dados: ' + error);
  });

const initializeDatabase = async () => {
  try {
    await sequelize.sync({ logging: false });
    console.log('As tabelas foram inicializadas corretamente.');
  } catch (error) {
    console.error('Ocorreu um erro ao inicializar as tabelas:', error);
  }
};
  
initializeDatabase();

module.exports = sequelize;
