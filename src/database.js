const Sequelize = require('sequelize');

const sequelize = new Sequelize('nome_do_banco_de_dados', 'seu_usuario', 'sua_senha', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
