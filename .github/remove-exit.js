
const glob = require("glob")
const ExifTransformer = require('exif-be-gone')
const fs = require("fs")

function purgeExif(file) {
    const reader = fs.createReadStream(file)
    const writer = fs.createWriteStream(file + '.out')

    reader.pipe(new ExifTransformer()).pipe(writer)
    writer.on('finish', function(){
        fs.copyFileSync(file + '.out', file)
        fs.unlinkSync(file + '.out')
    })
}

glob("content/**/*.jpg", function (er, files) {
    files.map(purgeExif)
})
glob("content/**/*.jpeg", function (er, files) {
    files.map(purgeExif)
})
glob("content/**/*.png", function (er, files) {
    files.map(purgeExif)
})


