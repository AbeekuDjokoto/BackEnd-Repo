import { category } from "../data.js";

export const getAllCategory = (req, res)=> {
    return res.status(200).send({
        message: "Category fetched successfully",
        data: category
    })
}