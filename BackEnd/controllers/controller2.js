const examSchema = require('../models/examSchema')


const findTag = async (request, response) => {
    try{
        const tags = await examSchema.find({Tags:request.params.Tags})
        response.status(200).json({tags})
    }catch(error){
        response.json({message:error})
    }
}

const getAll = async (request, response) =>{
   try{ 
        const showExams = await examSchema.find().select(['-Description', '-Applicants']);
        return response.json(showExams)
   } catch(error) {
        return response.json({message:error})
   }  
}

const registerExam = (request, response) =>{
    const registeredExam = new examSchema({
    Title:request.body.Title,
    Tags:request.body.Tags,
    Description:request.body.Description
    })
    registeredExam.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
}

const updateExam = async (request, response) =>{ 
    try {
        const _id = request.params;
        const updateExam = await examSchema.findOneAndUpdate(_id, request.body, {
            new : true
        });
        response.send(updateExam);
    }catch(e){
        response.status(404).send(e);
    }
}

const deleteExam = async (request, response) => {
    try{
        await examSchema.remove({_id:request.params._id})
    }catch(err){
        response.json({message:err})
    }
}

module.exports = {
    deleteExam,
    registerExam,
    findTag,
    getAll,
    updateExam
}