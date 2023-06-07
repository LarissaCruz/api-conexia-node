const Usuario = require("../models/Usuario");

class UsuarioController {
  static async registrarUsuario(req, res) {
    try {
      // Extrair os dados do corpo da solicitação
      const { email, senha, confirmSenha, nome, sobrenome, idade, cidade } =
        req.body;

      const usuarioExistente = await Usuario.findOne({ where: { email } });
      if (usuarioExistente) {
        // Se o email já estiver cadastrado, retorna uma resposta informando a duplicidade
        return res.status(200).json({
          status: "duplicidade",
          message: "O email já está cadastrado.",
        });
      }
      // Extrair a imagem em base64 do corpo da solicitação
      const imagemBase64 = req.body.imagem;

      // Converter a imagem base64 para Buffer
      const imagemBuffer = Buffer.from(imagemBase64, "base64");

      // Crie um novo usuário com os dados fornecidos
      const novoUsuario = await Usuario.create({
        email,
        senha,
        confirmSenha,
        nome,
        sobrenome,
        idade,
        cidade,
        imagem: imagemBuffer,
      });

      // Responda com sucesso
      res
        .status(200)
        .json({ status: "success", message: "Usuário registrado com sucesso" });
    } catch (error) {
      // Lógica para lidar com erros
      console.error("Erro ao registrar o usuário:", error);
      res
        .status(500)
        .json({ status: "error", message: "Erro ao registrar o usuário" });
    }
  }
  static async loginUsuario(req, res) {
    const { email, senha } = req.query;
    console.log(req.query);

    try {
      const usuario = await Usuario.findOne({ where: { email, senha } });
      if (usuario) {
        console.log("Login bem-sucedido!");

        res.status(200).json({ status: "success", id: usuario.id });
      } else {
        res
          .status(404)
          .json({ status: "error", error: "Usuário não encontrado" }); // Status 404 para não encontrado
      }
    } catch (error) {
      console.error("Erro ao verificar as credenciais:", error);
      res.status(500).send("Erro ao fazer o login");
    }
  }

  static async getUsuario(req, res) {
    const { id } = req.params;

    try {
      const usuario = await Usuario.findByPk(1, {
        attributes: [
          "id",
          "nome",
          "email",
          "senha",
          "confirmSenha",
          "sobrenome",
          "idade",
          "cidade",
        ],
      });
      if (usuario) {
        console.log("Usuário encontrado:", usuario);
        res.status(200).json({ status: "success", data: usuario });
      } else {
        console.log("Usuário não encontrado");
        res
          .status(404)
          .json({ status: "error", error: "Usuário não encontrado" }); // Status 404 para não encontrado
      }
    } catch (error) {
      console.error("Erro ao buscar o usuário:", error);
      res.status(500).json({ error: "Erro ao buscar o usuário" });
    }
  }
}

module.exports = UsuarioController;
