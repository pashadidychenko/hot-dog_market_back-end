const { Router } = require("express");
const productRoutes = Router();
const productControllers = require("../products/product.controllers");

productRoutes.get("/", productControllers.getProduct);

productRoutes.post("/add", productControllers.addProduct);

productRoutes.post("/edit", productControllers.editProduct);

productRoutes.post("/delete/:id", productControllers.deleteProduct);

module.exports = productRoutes;
