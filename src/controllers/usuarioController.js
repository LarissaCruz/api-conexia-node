const Usuario = require('../models/Usuario');

class UsuarioController {
  static async registrarUsuario(req, res) {
    const { nome, email, senha } = req.body;

    try {
      const usuario = await Usuario.create({ nome, email, senha });
      console.log('Usuário registrado com sucesso!');
      res.send('Usuário registrado com sucesso!');
    } catch (error) {
      console.error('Erro ao registrar o usuário:', error);
      res.status(500).send('Erro ao registrar o usuário');
    }
  }

  static async loginUsuario(req, res) {
    const { email, senha } = req.query;

    try {
      const usuario = await Usuario.findOne({ where: { email, senha } });
      if (usuario) {
        console.log('Login bem-sucedido!');
        res.send('Login bem-sucedido!');
      } else {
        console.log('Credenciais inválidas!');
        res.send('Credenciais inválidas!');
      }
    } catch (error) {
      console.error('Erro ao verificar as credenciais:', error);
      res.status(500).send('Erro ao fazer o login');
    }
  }
}

module.exports = UsuarioController;
