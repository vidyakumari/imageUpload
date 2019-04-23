var Busboy = require('busboy');
var path = require('path');
var fs = require('fs');
var image = require('../image/image')
//upload using busboy
exports.upload = (req, res) => {
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
        var saveTo = path.join('./pictures', filename);
        console.log('Uploading: ' + saveTo);
        console.log(saveTo);
        file.pipe(fs.createWriteStream(saveTo));
        const imgdata = new image({
            fileName: filename,
            imageType: mimetype,
            url: '/pictures/' + filename
        });
        imgdata.save();
    });
    busboy.on('finish', function () {
        console.log('Upload complete');

        res.writeHead(200, { 'Connection': 'close' });
        res.end("uploaded successfully!");
    });
    return req.pipe(busboy);

};

//using base64 conversion
exports.base64upload = (req, res) => {
    var base64Data = req.body.image.replace(/^data:image\/(?:jpeg|jpg|JPEG|JPG|png|PNG);base64,/, "");
    var filename = 'Images';
    let extension, lowerCaseData = base64Data.toLowerCase();
    if (lowerCaseData.indexOf('png') !== -1) {
        extension = '.png'
    } else if (lowerCaseData.indexOf('jpg') !== -1) {
        extension = '.jpg'
    } else if (lowerCaseData.indexOf('jpeg') !== -1) {
        extension = '.jpeg'
    }
    fs.writeFile('./pictures/' + filename + extension, base64Data, 'base64', function (err) {
        var imgdata =  new image({
            fileName: filename,
            url: '/pictures/' + filename + extension,
            imageType: extension
        })

        imgdata.save(function (err) {
            if (err) {
                res.json(err);
            }
            res.json({
                success: true,
                path: '/pictures/' + filename + extension,
                fileName: filename,
                imageType: extension,
            })
        });
    });
}
