const express = require("express");
const router = express.Router();
const articleRepository = require("../Repositories/ArticleRepository");

router.get("/articles", (req, res) => {
  res.send("Rota de Artigos");
});

router.get("/admin/articles/new", (req, res) => {
  res.send("Rota para criar um novo artigo!");
});

module.exports = router;
