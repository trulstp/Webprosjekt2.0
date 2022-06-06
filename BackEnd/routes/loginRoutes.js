const { response } = require("express");
const express = require("express");
const { 
    getAll, 
    findUser, 
    updateUserWithPass,
    updateUserWithoutPass, 
    register, 
    login, 
    verifyUser, 
    deleteOne, 
    getUnverified, 
    getVerified } = require("../controllers/userController");

const router = express.Router();

router.get("/unverified", getUnverified);

router.get("/verified", getVerified);

router.post("/register", register);

router.post("/login", login);

router.put("/verify/:_id", verifyUser);

router.get("/", getAll);

router.get("/:_id", findUser);

router.patch("/pass/:_id", updateUserWithPass);

router.patch("/:_id", updateUserWithoutPass);

router.delete("/:_id", deleteOne);

module.exports = router;
