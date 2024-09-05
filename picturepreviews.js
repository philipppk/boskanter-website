const fs = require("fs")
const sharp = require("sharp")

const galleryentries = JSON.parse(fs.readFileSync('./src/_data/gallery/pictures.json'))

if (! fs.existsSync('./_site/picturepreviews')) {
    fs.mkdirSync('./_site/picturepreviews')
}


const sizeDesired = 20000

async function makePreview(key) {
    let image = sharp(`./src/pictures/${key}`)
    let metadata = await image.metadata()

    // size
    let sizeOriginal = metadata.height * metadata.width
    let scale = (sizeOriginal < sizeDesired) ? 1 : Math.sqrt(sizeDesired/sizeOriginal)
    let width = Math.floor(metadata.width*scale)
    let height = Math.floor(metadata.height*scale)

    image = image.resize(width, height)
    
    switch (metadata.format) {
        case "jpeg": image = image.jpeg({ quality: 1 });
        case "png":image = image.png({ quality: 1 });
    }
    
    image.toFile(`./_site/picturepreviews/${key}`)
}

for (p of galleryentries) {
    makePreview(p.key)
}