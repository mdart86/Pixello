// packages required into file
const multer = require('multer');
const path = require ('path')

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.orginalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            cb(new Error("This file type is not supported"), false);
            return;
        }
        cb(null, true)
    }
})