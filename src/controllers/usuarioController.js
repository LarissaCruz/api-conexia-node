const Usuario = require("../models/Usuario");

class UsuarioController {
  static async registrarUsuario(req, res) {
    const { nome, email, senha, confirmSenha, sobrenome, idade, cidade } =
      req.body;
    console.log("body", req);
    try {
      const usuario = await Usuario.create({
        nome,
        email,
        senha,
        confirmSenha,
        sobrenome,
        idade,
        cidade,
      });
      console.log("Usuário registrado com sucesso!");

      res.json({ message: "Usuário registrado com sucesso!" });
    } catch (error) {
      console.error("Erro ao registrar o usuário:", error);
      res.status(500).send("Erro ao registrar o usuário");
    }
  }

  static async loginUsuario(req, res) {
    const { email, senha } = req.query;

    try {
      const usuario = await Usuario.findOne({ where: { email, senha } });
      if (usuario) {
        console.log("Login bem-sucedido!");
        res.status(200).json({ id: usuario.id });
      } else {
        console.log("Credenciais inválidas!");
        res.send("Credenciais inválidas!");
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
        res.json(usuario);
      } else {
        console.log("Usuário não encontrado");
        res.status(404).json({ error: "Usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar o usuário:", error);
      res.status(500).json({ error: "Erro ao buscar o usuário" });
    }
  }
}

module.exports = UsuarioController;
