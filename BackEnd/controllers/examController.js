const examSchema = require("../models/examSchema");

const findTag = async (request, response) => {
    try {
        const tags = await examSchema.find({ tags: request.params.tags });
        response.status(200).json({ tags });
    } catch (error) {
        response.json({ message: error });
    }
};

const getStat = (request, response) => {
    examSchema.find({}, { _id: 0, title: 0, deadline: 0, examStart: 0, examEnd: 0, tags: 0, minEdu: 0, examLvl: 0, description: 0, date: 0, __v: 0 }).then((showExams) => response.json(showExams));
};

const getAll = (request, response) => {
    examSchema
        .find()
        .sort({ deadline: 1 })
        .then((showExams) => response.json(showExams));
};

const findExam = async (request, response) => {
    try {
        const req = await examSchema.find({ _id: request.params._id });
        response.status(200).json({ req });
    } catch (error) {
        response.json({ message: error });
    }
};

const findExamAuthor = async (request, response) => {
    try {
        const req = await examSchema.find({ author: request.params.author });
        response.status(200).json({ req });
    } catch (error) {
        response.json({ message: error });
    }
};

const findExamHistory = async (request, response) => {
    try {
        const req = await examSchema.find({ acceptedApplicant: request.params.acceptedApplicant });
        response.status(200).json({ req });
    } catch (error) {
        response.json({ message: error });
    }
};

const registerExam = (request, response) => {
    const registeredExam = new examSchema({
        author: request.body.author,
        title: request.body.title,
        deadline: request.body.deadline,
        examStart: request.body.examStart,
        examEnd: request.body.examEnd,
        tags: request.body.tags,
        minEdu: request.body.minEdu,
        examLvl: request.body.examLvl,
        description: request.body.description,
        open: true,
        matched: false,
    });
    registeredExam
        .save()
        .then((data) => {
            response.json(data);
        })
        .catch((error) => {
            response.json(error);
        });
};

const updateExam = async (request, response) => {
    try {
        const _id = request.params;
        const updateExam = await examSchema.findOneAndUpdate(_id, request.body, {
            new: true,
        });
        response.send(updateExam);
    } catch (e) {
        response.status(404).send(e);
    }
};

const deleteExam = async (request, response) => {
    try {
        await examSchema.remove({ _id: request.params._id });
    } catch (err) {
        response.json({ message: err });
    }
};

module.exports = {
    deleteExam,
    registerExam,
    findTag,
    getAll,
    updateExam,
    findExam,
    findExamAuthor,
    findExamHistory,
    getStat,
};
