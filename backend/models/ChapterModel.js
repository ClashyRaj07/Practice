const mongoose = require('mongoose');
const {Schema} = mongoose;

const ChapterModel = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    courseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },

    title:{
        type: String,
        required: true
    },

    url:{
        type: String,
        required:  ["true","Please Enter Url of Course"]
    },

    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Chapter',ChapterModel);