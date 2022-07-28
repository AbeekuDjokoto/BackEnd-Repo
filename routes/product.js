import { Router } from "express";
import { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";
import { checkIfProductExist } from "../middlewares/index.js";
import { productSchema } from "../middlewares/validation.js";

const router = Router();

//Get All Product
router.get("/getAllProducts", getAllProducts);

//Get Single Product
router.get("/product/:productId", checkIfProductExist, getSingleProduct);

//Create a new Product
router.post("/products", (req, res, next)=>{
    const { 
        error: {details},
    } = productSchema.validate(req.body, {abortEarly: false});
    if(details){
        return res.status(400).send({
           error: details,
        })
    }
    next();
    
}, createProduct);

// Update an existing user
router.put("/product/:productId", checkIfProductExist, updateProduct);

// Delete an existing user
router.delete("/product/:productId", checkIfProductExist, deleteProduct);

export default router;