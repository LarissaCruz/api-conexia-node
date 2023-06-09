const Seguidor = require("../models/Seguidor");

class SeguidorController {
  static async adicionarSeguidor(req, res) {
    try {
      const { id_seguidor, id_seguindo } = req.body;

      const novoSeguidor = await Seguidor.create({
        id_seguidor,
        id_seguindo,
      });

      res.status(201).json({
        message: "Seguidor adicionado com sucesso",
        data: novoSeguidor,
      });
    } catch (error) {
      console.error("Erro ao adicionar seguidor:", error);
      res.status(500).json({ error: "Erro ao adicionar seguidor" });
    }
  }
}

module.exports = SeguidorController;
