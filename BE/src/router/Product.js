import express from "express";
import {
  addProduct,
  removeProduct,
  updateProduct,
  getAllProduct,
  getOneproduct,
} from "../controller/Product";
const router = express.Router();
router.post("/products", addProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", removeProduct);
router.get("/products", getAllProduct);
router.get("/products/:id", getOneproduct);

export default router;
