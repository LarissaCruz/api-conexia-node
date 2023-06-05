const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');
const PublicacaoController = require('../controllers/publicacaoController');

router.post('/usuarios/registro', UsuarioController.registrarUsuario);
router.get('/usuarios/login', UsuarioController.loginUsuario);

router.post('/publicacoes', PublicacaoController.criarPublicacao);
router.get('/publicacoes', PublicacaoController.listarPublicacoes);

module.exports = router;
