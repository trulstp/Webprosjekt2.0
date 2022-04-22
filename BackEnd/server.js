const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const examRoutes = require('./routes/routes2')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const PORT = process.env.PORT || 5000

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"))
app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.use('/exam', examRoutes)
app.listen(PORT, () => console.log(`server is up and running on ${PORT}`)) 
