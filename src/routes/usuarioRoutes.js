const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/usuarioController");
const PublicacaoController = require("../controllers/publicacaoController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post(
  "/usuarios/registro",
  upload.single("imagem"),
  UsuarioController.registrarUsuario
);
router.get("/usuarios/login", UsuarioController.loginUsuario);
router.get("/usuarios/:id", UsuarioController.getUsuario);

router.post("/publicacoes", PublicacaoController.criarPublicacao);
router.get("/publicacoes", PublicacaoController.listarPublicacoesPorUsuario);

module.exports = router;
