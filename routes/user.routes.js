const express = require("express");
const router = express.Router();
const {
    createUser,getAll,getUserById
   
} = require("../controllers/user.controller");

router.post("/", createUser);
router.get("/", getAll);
router.get("/:id", getUserById);
module.exports = router;