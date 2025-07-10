const mongoose =require('mongoose')

const shortId = require('shortid')

const shortURlSchema = new mongoose.Schema({
    originalUrl:{
        type:String,
        required:true,

    },
    short_code:{
        type:String,
        required:true,
        default:shortId.generate
    },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('shortUrl',shortURlSchema)