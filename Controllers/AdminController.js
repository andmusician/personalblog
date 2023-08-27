const express = require("express");
const router = express.Router();
const AdminRepository = require("../Repositories/AdminRepository");
const bcrypt = require("bcryptjs");

router.get("/admin/users", (req, res) => {
  res.send("Listagem de usuarios");
});

router.get("/admin/users/create", (req, res) => {
  res.render("admin/createuser");
});

router.post("/admin/users/create", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  AdminRepository.findOne(email).then((user) => {
    if (user == undefined) {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(password, salt);

      AdminRepository.create({
        email: email,
        password: hash,
      });
      res.redirect("/");
    } else {
      res.json({ mensagem: "usuário ja cadastrado" });
    }
  });
});

module.exports = router;
