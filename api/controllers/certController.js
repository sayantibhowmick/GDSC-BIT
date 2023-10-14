const Certificate = require('../models/certModel.js');

exports.verifyCertificate = async (req, res) => {
    try {
        const certData = await Certificate.findById(req.params.certificateID);
        if (!certData) {
            return res.status(400).json({
                success: false,
                msg: "Certificate not found",
            });
        }

        res.status(200).json({
            success: true,
            data: certData,
        });
    }
    catch (error) {
        res.send("Try again after some time!");
    }
};