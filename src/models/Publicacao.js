const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Publicacoes extends Model {}

Publicacoes.init(
  {
    texto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "publicacoes",
    timestamps: false,
  }
);

module.exports = Publicacoes;
