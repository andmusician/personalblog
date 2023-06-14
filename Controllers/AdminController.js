const express = require("express");
const router = express.Router();
const AdminRepository = require("../Repositories/AdminRepository");

router.get("/admin/users", (req, res) => {
  res.send("Listagem de usuarios");
});

router.get("/admin/users/create", (req, res) => {
  res.render("admin/createuser");
});

module.exports = router;
