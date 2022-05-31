const PostModel = require("../models/PostModel.js");


// !----->Insert New Data in Database
const newPostController = (req, res, next)=>{
    const postData = PostModel({
        pTitle: req.body.pTitle,
        pBody: req.body.pBody
    })
    postData.save()
        .then(data =>{
            res.status(201).json({
                message: "Successfully, New Post Submitted!",
                postData: data
            })
        })
        .catch(err =>{
            res.status(500).json({
                message: "Sorry, Failed to save new data with unique Title!",
                error: err
            })
        })
}

// !----->Show All Data
const getAllPostController = (req, res, next) =>{
    PostModel.find()
        .then(data =>{
            res.status(200).json({
                message: "All Data Showed!",
                data
            })
        })
        .catch(err =>{
            res.status(500).json({
                message: "Error Occured!",
                error: err
            })
        })
}

// !----->Show Single Data via ID
const getSinglePostController =(req, res, next) =>{
    let id = req.params.id;
    PostModel.findById(id)
        .then(singeData =>{
            res.status(200).json({
                singeData
            })
        })
        .catch(err =>{
            res.status(500).json({
                message: "Error Occured",
                error: err
            })
        })
}
// !----->Update Single Data
const updateSinglePostController = (req, res, next) =>{
    let id = req.params.id;
    let updatedData ={
        pTitle: req.body.pTitle,
        pBody: req.body.pBody
    }
    PostModel.findByIdAndUpdate(id, {$set: updatedData})
        .then(updatedSingleData =>{
            res.status(200).json({
                message: "Data Successfully Updated!"
            })
        })
        .catch(err =>{
            res.status(500).json({
                message: "Error Occured",
                error: err
            })
        })
}

// !----->Delete Single Data
const deleteSinglePostController = (req, res, next) =>{
    let id = req.params.id;
    PostModel.findByIdAndRemove(id)
        .then(deletedData =>{
            res.status(200).json({
                message: "Post Successfully Deleted!",
            })
        })
        .catch(err =>{
            res.status(500).json({
                message: "Error Occured",
                error: err
            })
        })
}



module.exports = {
    newPostController,
    getAllPostController,
    getSinglePostController,
    deleteSinglePostController,
    updateSinglePostController
}