const mongoose = require('mongoose')
const modelName = "post"

const schema = new mongoose.Schema({
    thumbnail: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 300,
    },
    hashtags: {
        type: String,
        required: false,

    },
    content: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 5000,
    },
    cratedAt: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    updated_at:{
        type:Date,
        default:Date.now
    },

})


module.exports = mongoose.model(modelName, schema)