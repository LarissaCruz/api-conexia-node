const express = require('express');
const routes = require('./routes');

const app = express();

// Outros middlewares e configurações...

// Utilizar as rotas
app.use(routes);

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
