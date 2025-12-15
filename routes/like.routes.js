const express = require("express"); 
const router = express.Router(); 
const { createLike, deleteLike, } = require("../controllers/like.controller"); 
router.post("/", createLike); 
router.delete("/:id", deleteLike); 
module.exports = router; 
like.routes.js 