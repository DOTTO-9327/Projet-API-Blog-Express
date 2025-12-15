const express = require("express");
const router = express.Router();

const {
  getAllArticles,
  getArticleById,
  createArticle,
} = require("../controllers/article.controller");

router.get("/", getAllArticles);
router.get("/:id", getArticleById);
router.post("/", createArticle);
module.exports = router;
