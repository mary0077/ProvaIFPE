const sequelize = require('./database');
const Jogador = require('./models/jogador');

async function setupDatabase() {
  try {
    // Sincronizar o Model com o banco de dados
    await sequelize.sync();
    console.log('Tabela sincronizada com sucesso.');
  } catch (error) {
    console.error('Erro ao sincronizar a tabela:', error);
  }
}

setupDatabase();
