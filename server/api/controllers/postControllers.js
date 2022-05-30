const PostModel = require("../models/PostModel.js");

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

module.exports = {
    newPostController,
}