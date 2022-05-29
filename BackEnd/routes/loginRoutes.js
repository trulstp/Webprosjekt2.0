const { response } = require("express");
const express = require("express");
const { getAll, findUser, updateUser, deleteOne } = require("../controllers/userController");
const router = express.Router();

const { register, login } = require("../controllers/userController");

router.post("/register", register);

router.get("/login", login);

router.get("/", getAll);

router.get("/:_id", findUser);

router.patch("/:_id", updateUser);

router.delete("/:_id", deleteOne);

module.exports = router;
