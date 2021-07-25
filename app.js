// Requiring packages into the application
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// port object connecting to Mongo Atlas OR MongoDB
const port = process.env.PORT || 4000

// app object that contains the Express server
const app = express()

// require dotenv package when not equal to production. config function to refer to dotenv file to match any .env process
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

// connection to MongoDB_URI using encryption
const dbConn = process.env.MONGODB_URI

// connects to database and also handles errors
mongoose.connect(dbConn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, 
    err => {
        if (err){
            console.log("Sorry, a connection to the database has not been established", err)
        } else {
            console.log("You are connected to the Pixello database")        }
    })

    
// Middleware added to application
app.use(cors())

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads



// Listening for connections on port 4000 and has a callback function that is printed to the console
app.listen(4000, () => {console.log(`Pixello is running on port: ${[port]}`)})