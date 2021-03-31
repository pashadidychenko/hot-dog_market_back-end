const Sequelize = require("sequelize");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const productRoutes = require("./api/routes/products.routes");

const app = express();
require("dotenv").config();
const sequelize = new Sequelize(process.env.URL);

app.use(express.json());
app.use(morgan("combined"));
app.use(cors());
app.use("/product", productRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log("Server wait connection...");
    });
  })
  .catch((err) => console.log(err));

module.exports = sequelize;
