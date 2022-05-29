const { response } = require("express");
const express = require("express");
const router = express.Router();
const { register, getAll, findUser, deleteOne } = require("../controllers/adminController");

router.post("/", register);

router.get("/", getAll);

router.get("/:_id", findUser);

router.delete("/:_id", deleteOne);

module.exports = router;
