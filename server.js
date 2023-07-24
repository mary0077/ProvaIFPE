const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Jogador = require('./models/jogador');
const { Op } = require('sequelize');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.post('/salvarJogador', async (req, res) => {
  try {
   
    const { nome, time, idade, aceleracao, velocidadeSprint, finalizacao, forcaChute, chutesLongos, penaltis, visao, cruzamentos, agilidade, equilibrio, dribles } = req.body;

    const jogador = await Jogador.create({
      nome,
      time,
      idade,
      aceleracao,
      velocidadeSprint,
      finalizacao,
      forcaChute,
      chutesLongos,
      penaltis,
      visao,
      cruzamentos,
      agilidade,
      equilibrio,
      dribles,
    });

    console.log('Jogador cadastrado:', jogador);

    res.send('Jogador cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar jogador:', error);
    res.status(500).send('Erro ao cadastrar jogador');
  }
});

app.get('/resultado', async (req, res) => {
  try {
   
    const jogadores = await Jogador.findAll();

    res.render('resultadoConsulta', { jogadores });
  } catch (error) {
    console.error('Erro ao consultar jogadores:', error);
    res.status(500).send('Erro ao consultar jogadores');
  }
});

app.get('/consulta', (req, res) => {
  res.render('consulta');
});

app.get('/consultarPorNome', async (req, res) => {
  try {
    const { nome } = req.query;

    const jogadores = await Jogador.findAll({
      where: {
        nome: {
          [Op.like]: `%${nome}%`,
        },
      },
    });

    res.render('resultadoConsulta', { jogadores });
  } catch (error) {
    console.error('Erro ao consultar jogadores por nome:', error);
    res.status(500).send('Erro ao consultar jogadores por nome');
  }
});

app.get('/consultarPorTime', async (req, res) => {
  try {
    const { time } = req.query;

    const jogadores = await Jogador.findAll({
      where: {
        time: {
          [Op.like]: `%${time}%`,
        },
      },
    });

    res.render('resultadoConsulta', { jogadores });
  } catch (error) {
    console.error('Erro ao consultar jogadores por time:', error);
    res.status(500).send('Erro ao consultar jogadores por time');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
