const express = require("express");
const router = express.Router();
const categoriesRepository = require("../Repositories/CategoryRepository");
const slugify = require("slugify");

router.get("/categories", (req, res) => {
  res.send("Rota de Categorias");
});

router.get("/admin/categories/edit/:id", (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.redirect("/admin/categories");
  }

  categoriesRepository
    .findById(id)
    .then((category) => {
      res.render("admin/categories/edit", { categoria: category });
    })
    .catch((error) => {
      console.log(error);
      res.render("admin/categories/index");
    });
});

router.post("/categories/update", (req, res) => {
  var id = req.body.id;
  var title = req.body.title;
  if (title != undefined) {
    categoriesRepository
      .update(id, {
        title: title,
        slug: slugify(title),
      })
      .then(() => {
        res.redirect("/admin/categories");
      });
  } else {
    res.redirect("/admin/categories/edit");
  }
});

router.get("/admin/categories/new", (req, res) => {
  res.render("admin/categories/new");
});

router.post("/categories/save", (req, res) => {
  var title = req.body.title;
  if (title != undefined) {
    categoriesRepository.create({
      title: title,
      slug: slugify(title),
    });
    res.redirect("/admin/categories/new");
  } else {
    res.redirect("/admin/categories/new");
  }
});

router.get("/admin/categories", (req, res) => {
  var categories = categoriesRepository.read().then((category) => {
    res.render("admin/categories/index", { categories: category });
  });
});

router.post("/categories/delete", (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      categoriesRepository.delete(id).then((retorno) => {
        res.redirect("/admin/categories");
      });
    } else {
      res.redirect("/admin/categories");
    }
  } else {
    res.redirect("/admin/categories");
  }
});

module.exports = router;
