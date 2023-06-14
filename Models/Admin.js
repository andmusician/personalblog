const { Sequelize, Model, DataTypes } = require("sequelize");
const connection = require("../database/database");

const Admin = connection.define("admin", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Admin.sync({ force: false }).then(() => {});

module.exports = Admin;
