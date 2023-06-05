class Publicacao {
    constructor(titulo, conteudo) {
      this.titulo = titulo;
      this.conteudo = conteudo;
      this.dataCriacao = new Date();
    }
  }
  
  module.exports = Publicacao;
  