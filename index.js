const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dbconn = require("./database/database");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

const port = 8080;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
