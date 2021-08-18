// Multer package required into file. It is a middleware used for handling form-data and will handle our file update
const multer = require('multer');

// Path npm package used to require executable scripts available in npm without having to boot up all of npm
const path = require ('path')

// The below function will allow us to handle the file upload thanks to Multer using the executable scripts from npm with the help of the path package. 
// only certain file types are accepted, which are the three main file types we believe, if the file type is not accepted, an error is returned
module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            cb(new Error("This file type is not supported"), false);
            return;
        }
        cb(null, true)
    }
})