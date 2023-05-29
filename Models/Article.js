const { Sequelize, Model, DataTypes } = require("sequelize");
const connection = require("../database/database");
const Category = require("./Category");

const Article = connection.define("articles", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Category.hasMany(Article);
Article.belongsTo(Category);

Article.sync({ force: false }).then(() => {});

module.exports = Article;
