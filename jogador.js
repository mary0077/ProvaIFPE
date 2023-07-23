const { DataTypes } = require('sequelize');
const sequelize = require('../database');
 
const Jogador = sequelize.define('Jogador', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  aceleracao: DataTypes.INTEGER,
  velocidadeSprint: DataTypes.INTEGER,
  finalizacao: DataTypes.INTEGER,
  forcaChute: DataTypes.INTEGER,
  chutesLongos: DataTypes.INTEGER,
  penaltis: DataTypes.INTEGER,
  visao: DataTypes.INTEGER,
  cruzamentos: DataTypes.INTEGER,
  agilidade: DataTypes.INTEGER,
  equilibrio: DataTypes.INTEGER,
  dribles: DataTypes.INTEGER,
}, {
    tableName: 'jogadores',
    timestamps: true,
    paranoid: true,
});

module.exports = Jogador;
