const Product = require("./products.model");

module.exports = class productControllers {
  static async getProduct(req, res, next) {
    try {
      const product = await Product.findAll({ raw: true });
      return res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  }

  static async addProduct(req, res, next) {
    try {
      if (!req.body) return res.sendStatus(400);
      const name = req.body.name;
      const title = req.body.title;
      const description = req.body.description;
      const image = req.body.image;
      await Product.create({
        name,
        title,
        description,
        image,
      });
      return res.status(200).json({ message: "Product greate" });
    } catch (err) {
      next(err);
    }
  }

  static async editProduct(req, res, next) {
    try {
      if (!req.body) return res.sendStatus(400);
      const name = req.body.name;
      const title = req.body.title;
      const description = req.body.description;
      const image = req.body.image;
      const productid = req.body.id;
      await Product.update(
        { name: name, title: title, description: description, image: image },
        { where: { id: productid } }
      );
      return res.status(200).json({ message: "product update" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const productid = req.params.id;
      await Product.destroy({ where: { id: productid } });
      return res.status(200).json({ message: "product delete" });
    } catch (err) {
      next(err);
    }
  }
};
