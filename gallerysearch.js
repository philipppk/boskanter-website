const MiniSearch = require('minisearch')
const fs = require("fs")

const categories = require('./src/_data/gallery/categories.js').short.map((c) => c.key)

const picturesbycategory = []
picturesbycategory["all"] = JSON.parse(fs.readFileSync('./src/_data/gallery/pictures.json')).map((p) => ({
    id: p.key,
    date: p.date,
    category: p.category,
    en: p.description.en,
    fr: p.description.fr,
    nl: p.description.nl
}))

for (c of categories) {
    if (c != "all") {
        picturesbycategory[c] = []
    }
}

for (p of picturesbycategory["all"]) {
    if (p.category in picturesbycategory) {
        picturesbycategory[p.category].push(p)
    }
} 

const categorysearch = []
for (c of categories) {
    categorysearch[c] = new MiniSearch({
        fields: ['id', 'date', 'en', 'fr', 'nl'], // fields to index for full-text search
        storeFields: ['id', 'date', 'en', 'fr', 'nl'] // fields to return with search results
    })
}

for (c of categories) {
    categorysearch[c].addAll(picturesbycategory[c])
}

module.exports = {category: categorysearch, pictures: picturesbycategory}