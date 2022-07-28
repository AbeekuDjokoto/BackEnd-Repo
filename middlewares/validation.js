import Joi from "joi";

export const productSchema = Joi.object({
    productsName: Joi.string().required(),
    quantity: Joi.number().min(0).max(99).required(),
    unitPrices: Joi.string().required(),
    category: Joi.string().required(),
})