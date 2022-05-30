const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    pTitle:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 200,
        trim: true,
        unique: true,
    },
    pBody:{
        type: String,
        required: true,
        minlength: 5,
        trim: true
    }
})

const Post =  mongoose.model('post', PostSchema);
module.exports = Post;