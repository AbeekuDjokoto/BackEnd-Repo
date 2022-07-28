import { products } from "../data.js";

export const getAllProducts = (req, res) => {
    res.status(200).send({
      message: "Users fetched Successfuly",
      data: products,
    });
  }

export const getSingleProduct = (req, res) => {
    res.status(200).send({
      message: "User fetched Successfuly",
      data: req.product,
    });
  }

  export const createProduct = (req, res) => {
    const { productsName, quantity, unitPrices, status, category } = req.body;
    const productId = Math.floor(Math.random(1, 100));
    products.push({
      id: productId,
      productsName,
      quantity,
      unitPrices,
      status,
      category,
    });
    res.status(201).send({
      message: "User created Successfully",
      data: products,
    });
  }


export const updateProduct = (req, res, next)=> {
    // get the request body
    const { product } = req;
    const data = req.body;
    product.productsName = data.productsName;
    if(data.productsName){
        product.productsName = data.productsName;
    }
    if(data.quantity){
        product.quantity = data.quantity;
    }
    if(data.unitPrices){
        product.unitPrices = data.unitPrices;
    }
    if(data.category){
        product.category = data.category;
    }

    return res.status(200).send({
        message: "Product updated successfully",
        data: product
    });
};

export const deleteProduct = (req, res)=> {
    let newProducts = products.filter((item)=>{
        return item.id !== req.item.id
    })
    return res.status(200).send({
        message: "Product deleted successfully",
        data: newProducts
    })
}