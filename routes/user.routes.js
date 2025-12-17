const express = require("express");
const router = express.Router();
const {
    createUser,getAll,getUserById,update,deleteUser
   
} = require("../controllers/user.controller");

router.post("/", createUser);
router.get("/", getAll);
router.get("/:id", getUserById);
router.put("/:id",update);
router.delete("/:id", deleteUser)
module.exports = router;