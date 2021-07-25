// Requiring Multer API for middleware
const multer = require('multer')

// Requiring Cloudinary for Cloud Storage
const cloudinary = require('cloudinary')

const { CloudinaryStorage } = require('multer-storage-cloudinary')

// access variables set in dotenv file - these are stored in a dotenv file for security
const {
    CLOUDINARY_HOST,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET
} = process.env;


// configures cloudinary with variables above. Their values are processed from the dotenv file for security
cloudinary.config({
    cloud_name: CLOUDINARY_HOST,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
})

// file types stored in variables to be passed into new Cloudinary Storage below
const jpeg = "jpeg"
const jpg = "jpg"
const png  = "png"

// creates new storage, storing in the folder Pixello. Images are saved as png
const storage = new CloudinaryStorage ({
    cloudinary: cloudinary, 
    params: {
        folder: "Pixello",
        format: async () => `${jpeg}` `${jpg}` `${png}`,
        public_id: (req, file) => file.filename,
    }
})

// Multer API used to store the inteded upload to a storage property. This will be used as middleware in the post route in the router
const parser = multer ({ storage: storage })

// Exported Parser to be used as middleware in router
module.exports = parser