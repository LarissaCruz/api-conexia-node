const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/usuarioController");
const PublicacaoController = require("../controllers/publicacaoController");
const multer = require("multer");
const upload = multer({ dest: "uploads/", limits: { fileSize: 200 * 1024 * 1024 }, // Limite de 10MB
});

router.post(
  "/usuarios/registro",
  upload.single("imagem"),
  UsuarioController.registrarUsuario
);
router.get("/usuarios/login", UsuarioController.loginUsuario);
router.get("/usuarios/:id", UsuarioController.getUsuario);

router.post("/publicacoes", PublicacaoController.criarPublicacao);
router.get("/publicacoes", PublicacaoController.listarPublicacoes);

module.exports = router;
