// Requiring packages into the application
const express = require('express') // express package required into file for routing
const cors = require('cors') // cors packaged used to connect Express to Cors
const jwt = require('jsonwebtoken') // JWT package required into file for authentication
const mongoose = require('mongoose') // mongoose package required into file to connect to database

// requiring routes into app file for app to use
const authRouter = require('./routes/authRoutes') 
const postRouter = require('./routes/postRoutes') 
const userRouter = require('./routes/userRoutes') 
const commentRouter = require('./routes/commentRoutes') 

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

// JWT and header config for app to use
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

// express used in app with URL encoding
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

// cors options set in application with URL, Sucess status and credentials set to true for Access-Control-Allow-Credentials
const corsOptions = {
    origin: 'https://www.pixellophotos.com',
    optionsSuccessStatus: 200,
    credentials: true
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://www.pixellophotos.com");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// app.get function gets cors and sends a response to server-side deployment (Heroku) with below message
app.get("/", cors(corsOptions),(req, res) => {
    res.send("Pixello testing... 1, 2, 3, if you're seeing this then all is working as it should")
})

// routers used in application
app.use("/auth", authRouter)
app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

// app will use the below function for any invalid fields and errors
app.use(function (err, req, res, next) {
    console.log('This is the invalid field ->', err.field)
    next(err)
})

// Listening for connections on port 4000 and has a callback function that is printed to the console
app.listen(port, ()=>{console.log(`The Pixello server is running on port: ${[port]}`)})