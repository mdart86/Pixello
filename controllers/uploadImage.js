const ImageSchema = require('../models/fileUpload')

module.exports.UploadImage = async (req, res) => {
    const imageUploaded = new ImageSchema ({
        image: req.file.path,
    });

    try {
        await imageUploaded.save();
    }
    catch (error) {
        return res.status(400).json({
            message: `Your image has failed to upload, please refer to error: ${error}`,
            status: "error",
        })
    }
}