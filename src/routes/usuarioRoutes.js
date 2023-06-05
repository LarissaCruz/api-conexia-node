const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/usuarioController");
const PublicacaoController = require("../controllers/publicacaoController");

router.post("/usuarios/registro", UsuarioController.registrarUsuario);
router.get("/usuarios/login", UsuarioController.loginUsuario);
router.get("/usuarios/:id", UsuarioController.getUsuario);

router.post("/publicacoes", PublicacaoController.criarPublicacao);
router.get("/publicacoes", PublicacaoController.listarPublicacoes);
router.get("/dados", (req, res) => {
  const dados = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "Pedro" },
  ];

  res.json(dados);
});

module.exports = router;
