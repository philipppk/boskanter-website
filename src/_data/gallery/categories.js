// PLEASE EDIT HERE 

const categories = [
    {
        key: "all",
        title: {en: "All categories", fr: "Toutes les catégories", nl: "Alle categorieën"}
    },
    {
        key: "something",
        title: {en: "something", fr: "Quelquechose", nl: "iets"}
    }
]

// DONT EDIT AFTER HERE

const long = ["en", "fr", "nl"].map((l) => categories.map((c) => ({locale: l, key: c.key, title: c.title}))).flat()

module.exports = {short: categories, long: long}