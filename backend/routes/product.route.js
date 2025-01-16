import express from 'express';
import Product from '../model/product.model.js';
import mongoose from 'mongoose';
import { addProduct, deleteProduct, getAllProducts, updateProduct } from '../controller/product.controller.js';

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", addProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

export default router;