const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Jogador = sequelize.define(
  'Jogador',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
    aceleracao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    velocidadeSprint: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    finalizacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    forcaChute: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    chutesLongos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    penaltis: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    visao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cruzamentos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    agilidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    equilibrio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dribles: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'Jogador',
    timestamps: false,
  }
);

sequelize.sync()
  .then(() => {
    console.log('Tabela Jogador criada com sucesso!');
  })
  .catch((error) => {
    console.log('Erro ao criar tabela Jogador:', error);
  });

module.exports = Jogador;
