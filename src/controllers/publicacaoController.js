const Publicacao = require("../models/publicacao");

class PublicacaoController {
  static async criarPublicacao(req, res) {
    const { texto, id_usuario } = req.body;
    try {
      const post = await Publicacao.create({
        texto,
        id_usuario,
      });
      console.log("Publicação criada com sucesso!");

      res.json({ message: "Publicação criada com sucesso!" });
    } catch (error) {
      console.error("Erro ao inserir a publicação:", error);
      res.status(500).send("Erro ao inserir a publicação");
    }

    res.send("Publicação criada com sucesso!");
  }

  static async listarPublicacoesPorUsuario(req, res) {
    const idUsuario = req.params.idUsuario; // Supondo que o ID do usuário seja passado como parâmetro na rota

    try {
      const publicacoes = await Publicacao.findAll({
        where: {
          id_usuario: idUsuario, // Filtrando as publicações pelo ID do usuário
        },
      });
      res.json(publicacoes);
    } catch (error) {
      console.error("Erro ao listar publicações por usuário:", error);
      res.status(500).json({ error: "Erro ao listar publicações por usuário" });
    }
  }
}

module.exports = PublicacaoController;
