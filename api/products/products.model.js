const Sequelize = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  "postgres://kumhvdjx:ZP8Nk7aznZ5g-dgPx4qaLoV8kyQHhAZ4@rogue.db.elephantsql.com:5432/kumhvdjx"
);

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
