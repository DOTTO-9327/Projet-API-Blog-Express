const express = require("express");
const router = express.Router();
const {
    createUser,getAll
   
} = require("../controllers/user.controller");

router.post("/", createUser);
router.get("/", getAll);
module.exports = router;