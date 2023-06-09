const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Seguidor extends Model {}

Seguidor.init(
  {
    id_seguidor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_seguindo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Seguidor",
    tableName: "seguidores",
    timestamps: false,
  }
);

module.exports = Seguidor;
