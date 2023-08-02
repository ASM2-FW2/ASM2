import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routerProduct from "./router/Product";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routerProduct);
app.use("/api", function () {
  console.log(1);
});
mongoose.connect("mongodb://127.0.0.1:27017/ASM_FW2");

export const viteNodeApp = app;
