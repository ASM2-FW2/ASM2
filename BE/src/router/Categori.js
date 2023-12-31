import express from "express";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  getOneCategory,
  updateCategory,
} from "../controller/Categori";
const router = express.Router();
router.get("/categorys", getAllCategory);
router.get("/categorys/:id", getOneCategory);
router.post("/categorys", addCategory);
router.delete("/categorys/:id", deleteCategory);
router.put("/categorys/:id", updateCategory);
export default router;
