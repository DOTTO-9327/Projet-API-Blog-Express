const express = require("express");
const router = express.Router();

const { getAllArticle } = require("../controllers/article.controller");

router.get("/", getAllArticle);

module.exports = router;
