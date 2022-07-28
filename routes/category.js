import { Router } from "express";
import { getAllCategory } from "../controllers/category.js";

const router = Router();

router.get('/category', getAllCategory);

export default router;