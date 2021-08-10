// Requiring packages into the application
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

// requiring routes into app file
const authRouter = require('./routes/authRoutes') 
const postRouter = require('./routes/postRoutes') 
const userRouter = require('./routes/userRoutes') 

// port object connecting to Mongo Atlas OR MongoDB
const port = process.env.PORT || 4000

// app object that contains the Express server
const app = express()

// require dotenv package when not equal to production. config function to refer to dotenv file to match any .env process
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

// connection to MongoDB_URI using encryption
const dbConn = process.env.MONGOATLAS_URI

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
            console.log("You are connected to the Pixello database brought to you by Mongo Atlas")        
        }
})


app.use((req, res, next) => {
    if(req.headers && req.headers.authorization){
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_KEY,(err, decode)=>{
            if (err) {
                req.user = undefined
            }else{
                req.user = decode
            }
            next()
        })
    }else{
        req.user = undefined
        next()
    }
})
    
// Middleware added to application
app.use(cors())

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

const corsOptions = {
    origin: 'https://www.pixellophotos.com',
    optionsSuccessStatus: 200
}

app.get("/", cors(corsOptions),(req, res) => {
    res.send("Pixello testing... 1, 2, 3, if you're seeing this then all is working as it should")
})

// routers used in application
app.use("/auth", authRouter)
app.use("/posts", postRouter)
app.use("/users", userRouter)

app.use(function (err, req, res, next) {
    console.log('This is the invalid field ->', err.field)
    next(err)
})

// Listening for connections on port 4000 and has a callback function that is printed to the console
app.listen(port, ()=>{console.log(`The Pixello server is running on port: ${[port]}`)})
