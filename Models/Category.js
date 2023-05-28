const { Sequelize, Model, DataTypes } = require("sequelize");
const connection = require("../database/database");

const Category = connection.define("category", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Category.sync({ force: false }).then(() => {});

module.exports = Category;
