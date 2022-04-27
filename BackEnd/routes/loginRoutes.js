const { response } = require("express");
const express = require("express");
const { getAll } = require("../controllers/userController");
const router = express.Router();

const { register, login } = require("../controllers/userController");

router.post("/register", register);

router.get("/login", login);

router.get("/", getAll);

module.exports = router;
