const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);

connection
  .authenticate()
  .then(() => {
    console.log("Database conectado");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = connection;
