const express = require("express");
const router = express.Router();

const {
    getAllCategories, createCategory, getCategoryById, updateCategory,
} = require("../controllers/category.controller");

router.get("/", getAllCategories);
router.post("/", createCategory);
router.get("/:id", getCategoryById);
router.put("/:id",updateCategory);

module.exports = router;