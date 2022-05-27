const { response } = require("express");
const express = require("express");
const { check } = require('express-validator')
const { getAll, findUser, updateUser, register, login } = require("../controllers/userController");
const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/", getAll);

router.get("/:_id", findUser);

router.patch("/:_id", updateUser);

module.exports = router;
