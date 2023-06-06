const express = require("express");
const router = express.Router();
const articleRepository = require("../Repositories/ArticleRepository");

router.get("/articles", (req, res) => {
  res.send("Rota de Artigos");
});

router.get("/admin/articles/new", (req, res) => {
  res.render("admin/articles/new");
});

module.exports = router;
