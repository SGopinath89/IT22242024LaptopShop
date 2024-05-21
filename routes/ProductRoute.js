import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getSingleProductController,
  productFiltersController,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

//route

//create products
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//update products
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
//get products
router.get("/get-products", getAllProductsController);

//get single product
router.get("/get-products/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

export default router;
