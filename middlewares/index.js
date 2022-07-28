import { products } from "../data.js";

//Middleware to check if user exist
const checkIfProductExist = (req, res, next) => {
  const product = products.find((item) => item.id == req.params.productId);
  if (!product) {
    res.status(404).send({
      message: "No user exist with the given ID",
      data: null,
    });
  }
  req.product = product;
  next();
};

export { checkIfProductExist };