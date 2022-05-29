const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    deadline: {
        type: String,
        required: true,
    },
    examStart: {
        type: String,
        required: true,
    },
    examEnd: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        enum: [
            "Estetiske fag, kunst- og musikkfag",
            "Fiskeri-, husdyr- og landbruksfag",
            "Historie, religion, idèfag",
            "Idrettsfag, kroppsøving og friluftsliv",
            "Informasjonsteknologi og informatikk",
            "Juridiske fag, rettsvitenskap, politi",
            "Lærer- og lektorutdanning",
            "Matematikk og naturfag",
            "Mediefag, biblotekfag og journalistfag",
            "Medisin, odontologi, helse- og sosialfag",
            "Pedagogiske fag",
            "Reiselivsfag, hotellfag",
            "Samfunnsfag, psykologi",
            "Språk, litteratur",
            "Teknologi, ingeniørfag og arkitektur",
            "Økonomi og administrasjon",
        ],
        required: true,
        min: 1,
    },
    minEdu: {
        type: String,
        required: true,
    },
    examLvl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    open: {
        type: Boolean,
        required: true,
    },
    matched: {
        type: Boolean,
        required: true,
    },
    applicants: {
        type: Array,
    },
    acceptedApplicant: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("examdb", examSchema);
