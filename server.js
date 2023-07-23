const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Jogador = require('./models/jogador');

// Configuração para interpretar o corpo das requisições como JSON
app.use(bodyParser.json());

// Rota para receber os dados do formulário e salvar no banco de dados
app.post('/salvarJogador', async (req, res) => {
  try {
    const jogadorData = req.body;
    // Crie o jogador no banco de dados utilizando o Model Jogador
    const jogador = await Jogador.create(jogadorData);
    console.log('Jogador salvo:', jogador.toJSON());
    res.json({ message: 'Jogador salvo com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar jogador:', error);
    res.status(500).json({ message: 'Erro ao salvar jogador.' });
  }
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
