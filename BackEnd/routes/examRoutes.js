const { response } = require("express");
const express = require("express");
const router = express.Router();
const { auth, authRole } = require("../middleware/authMiddleware");
const { deleteExam, registerExam, findTag, getAll, updateExam, findExam, getStat, findExamAuthor } = require("../controllers/examController");

router.post("/", registerExam);

router.get("/", getAll);

router.get("/stat", getStat);

router.get("/tag/:tag", findTag);

router.delete("/:_id", deleteExam);

router.patch("/:_id", updateExam);

router.get("/:_id", findExam);

router.get("/author/:author", findExamAuthor);

module.exports = router;
