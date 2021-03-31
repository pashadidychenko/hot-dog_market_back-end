const Sequelize = require("sequelize");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const productRoutes = require("./api/routes/products.routes");

const app = express();
require("dotenv").config();
const sequelize = new Sequelize(
  "postgres://kumhvdjx:ZP8Nk7aznZ5g-dgPx4qaLoV8kyQHhAZ4@rogue.db.elephantsql.com:5432/kumhvdjx"
);

app.use(express.json());
app.use(morgan("combined"));
app.use(cors());
app.use("/product", productRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, function () {
      console.log("Server wait connection...");
    });
  })
  .catch((err) => console.log(err));

module.exports = sequelize;
