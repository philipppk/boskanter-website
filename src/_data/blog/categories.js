// PLEASE EDIT HERE 

const categories = [
    {
        key: "all",
        title: {en: "All categories", fr: "Toutes les catégories", nl: "Alle categorieën"}
    },
    {
        key: "gardening",
        title: {en: "Gardening", fr: "Jardin", nl: "Tuinieren"} 
    },
    {
        key: "low-tech",
        title: {en: "Low-Tech", fr: "Low-Tech", nl: "Low-Tech"}
    },
    {
        key: "animals",
        title: {en: "Animals", fr: "Animeaux", nl: "Dieren"}
    }
]

// DONT EDIT AFTER HERE

const long = ["en", "fr", "nl"].map((l) => categories.map((c) => ({locale: l, key: c.key, title: c.title}))).flat()

module.exports = {short: categories, long: long}