const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// models
const jobs = require('./Models/jobsModel')
const contact = require('./Models/contactModel')

const app = express()
const router = express.Router();

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connecting to database and listening to the PORT", process.env.PORT)
    })
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// jobs route
app.get('/api/jobs', async (req, res) => {
    const data = await jobs.find()

    if (!jobs) {
        return res.status(400).json({mssg: "no data found"});
    } else {
        return res.status(200).json(data)
    }
})

app.post('/api/jobs', async (req, res) => {
    const data = req.body

    try {
        const job = await jobs.create(data)
        res.status(200).json({job, mssg: "new job added"})
    } 
    catch (error) {
        res.status(400).json(error)
    }
    
})

app.post('/api/contact', async (req, res) => {
    const values = req.body

    try {
        const data = await contact.create(values)
        res.status(200).json({data, mssg: "message submited"})
    } 
    catch (error) {
        res.status(400).json(error)
    }
})

// contact route


process.env