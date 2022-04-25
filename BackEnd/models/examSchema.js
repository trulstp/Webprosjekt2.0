const mongoose = require('mongoose')

const examSchema = new mongoose.Schema (
    {
        Title: {
            type:String,
            required: true
        },

        Author: {
            type:String,
            required: true
        },
        Tags: {
         type:String,
         enum: ['Estetiske fag, kunst- og musikkfag',
                'Fiskeri-, husdyr- og landbruksfag',
                'Historie, religion, idèfag',
                'Idrettsfag, kroppsøving og friluftsliv',
                'Informasjonsteknologi og informatikk',
                'Juridiske fag, rettsvitenskap, politi',
                'Lærer- og lektorutdanning',
                'Matematikk og naturfag',
                'Mediefag, biblotekfag og journalistfag',
                'Medisin, odontologi, helse- og sosialfag',
                'Pedagogiske fag',
                'Reiselivsfag, hotellfag',
                'Samfunnsfag, psykologi',
                'Språk, litteratur',
                'Teknologi, ingeniørfag og arkitektur',
                'Økonomi og administrasjon'],
         required: true,
         min:1   
        },
        Description: {
            type:String,
            required:true
        },
        date: {
            type:Date,
            default:Date.now
        }
    }
)

module.exports = mongoose.model('examdb', examSchema)