const { response } = require("express");
const express = require("express");

const { check } = require("express-validator");
const { verify } = require("jsonwebtoken");
const { getAll, findUser, updateUser, register, login, verifyUser, deleteOne, getUnverified, getVerified } = require("../controllers/userController");

const router = express.Router();

router.get("/unverified", getUnverified);


router.get("/verified", getVerified);


router.post("/register", register);

router.post("/login", login);

router.put("/verify/:_id", verifyUser);

router.get("/", getAll);

router.get("/:_id", findUser);

router.patch("/:_id", updateUser);

router.delete("/:_id", deleteOne);

module.exports = router;
