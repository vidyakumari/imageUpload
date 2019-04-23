var Busboy = require('busboy');
var path = require('path');
var fs = require('fs');

exports.upload =  (req, res) =>{
  console.log(req );
   var busboy = new Busboy({ headers: req.headers });
   busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
     var saveTo = path.join('./pictures', filename);
     console.log('Uploading: ' + saveTo);
     console.log(saveTo);
     file.pipe(fs.createWriteStream(saveTo));
   });
   busboy.on('finish', function() {
     console.log('Upload complete');
   
     res.writeHead(200, { 'Connection': 'close' });
     res.end("That's all folks!");
   });
   // busboy.on("close",()=>{
   
   // })

   return req.pipe(busboy);

};