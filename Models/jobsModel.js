const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobsSchema = new Schema({
    image: {
        type: String,
        required: true
    }, 
    title: {
        type: String, 
        required: true
    }, 
    description: {
        type: String, 
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('jobs', jobsSchema)