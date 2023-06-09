const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

const Usuario = require("./usuario"); // Import the Usuario model

class Publicacao extends Model {}

Publicacao.init(
  {
    texto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imagem: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "publicacoes",
    timestamps: false,
  }
);

Publicacao.belongsTo(Usuario, {
  foreignKey: "id_usuario",
  targetKey: "id",
});

module.exports = Publicacao;
