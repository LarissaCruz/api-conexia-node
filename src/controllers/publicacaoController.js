const Publicacoes = require("../models/publicacao");
const Usuario = require("../models/usuario");

class PublicacaoController {
  static async criarPublicacao(req, res) {
    const { params } = req.body;
    const { texto, id, imageSrc } = params;
    //const imagemBase64 = imageSrc;

    // Converter a imagem base64 para Buffer
    //const imagemBuffer = Buffer.from(imagemBase64, "base64");
    try {
      const post = await Publicacoes.create({
        texto,
        id_usuario: id,
        imagem: imageSrc,
      });
      console.log("Publicação criada com sucesso!");

      res.json({ message: "Publicação criada com sucesso!" });
    } catch (error) {
      console.error("Erro ao inserir a publicação:", error);
      res.status(500).send("Erro ao inserir a publicação");
    }
  }

  static async listarPublicacoes(req, res) {
    try {
      const publicacoes = await Publicacoes.findAll({
        include: [
          {
            model: Usuario, // Modelo da tabela "usuarios"
            attributes: [
              "id",
              "nome",
              "sobrenome",
              "imagem",
              "idade",
              "cidade",
            ], // Atributos do usuário que deseja trazer na consulta
          },
        ],
        order: [["createdAt", "DESC"]],
      });

      res.status(200).json({ data: publicacoes });
    } catch (error) {
      console.error("Erro ao listar publicações por usuário:", error);
      res.status(500).json({ error: "Erro ao listar publicações por usuário" });
    }
  }

  static async listarPublicacoesPorUsuario(req, res) {
    const idUsuario = req.params.id; // Supondo que o ID do usuário seja passado como parâmetro na rota

    try {
      const publicacoes = await Publicacoes.findAll({
        where: {
          id_usuario: idUsuario, // Filtrando as publicações pelo ID do usuário
        },
        include: [
          {
            model: Usuario, // Modelo da tabela "usuarios"
            attributes: ["nome", "sobrenome", "imagem", "idade", "cidade"], // Atributos do usuário que deseja trazer na consulta
          },
        ],
        order: [["createdAt", "DESC"]],
      });
      res.status(200).json({ data: publicacoes });
    } catch (error) {
      console.error("Erro ao listar publicações por usuário:", error);
      res.status(500).json({ error: "Erro ao listar publicações por usuário" });
    }
  }
}

module.exports = PublicacaoController;
