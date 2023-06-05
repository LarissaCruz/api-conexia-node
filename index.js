const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const usuarioRoutes = require("./src/routes/usuarioRoutes");

const app = express();
const port = 3000;

app.use(cors()); // Adicione esta linha antes das suas rotas

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", usuarioRoutes);

app.listen(port, () => {
  console.log(`A API está rodando em http://localhost:${port}`);
});
