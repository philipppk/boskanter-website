// PLEASE EDIT HERE

let nav = [
    {
        type: "normal",
        title: {en: "principles", fr: "principes", nl: "principes"},
        link: "principles"
    },
    {
        type: "subordinated",
        title: {en: "permaculture", fr: "permaculture", nl: "permakultuur"},
        link: "principles#permaculture"
    },
    {
        type: "subordinated",
        title: {en: "transition towns",  fr: "villes en transition",  nl: "overgangssteden"},  
        link: "principles#transition_towns"
    },
    {
        type: "subordinated",
        title: {en: "links",  fr: "links",  nl: "links"},  
        link: "principles#links"
    },
    {
        type: "normal",
        title: {en: "practical",  fr: "practical",  nl: "praktisch"},
        link: "volunteering"
    },
    {
        type: "subordinated",
        title: {en: "ESC volunteering",  fr: "ESC",  nl: "ESC"},  
        link: "volunteering#ESC"
    },    
    {
        type: "subordinated",
        title: {en: "workaway volunteering",  fr: "workaway",  nl: "workaway"}, 
        link: "volunteering#workaway"
    },
    {
        type: "subordinated",
        title: {en: "directions",  fr: "workaway",  nl: "workaway"}, 
        link: "contact"
    },
    {
        type: "normal",
        title: {en: "blog",  fr: "blog",  nl: "blog"},
        link: "blog"
    },

    "insert blog categories here", 
    
    {
        type: "normal",
        title: {en: "calendar",  fr: "calendrier",  nl: "kalender"},  
        link: "calendar"
    },
    {
        type: "normal",
        title: {en: "Gallery", fr: "Galerie", nl: "Galerij"},
        link: "gallery"
    },

    "insert gallery categories here"
]

// DONT EDIT AFTER HERE

const blogcats = require('./blog/categories.js').short
const gallerycats = require('./gallery/categories.js').short
    
let entries = [["blog", blogcats], ["gallery", gallerycats]].map((cats) => cats[1].map((c) => {
    return {
        type: "subordinated",
        title: c.title,
        link: `${cats[0]}/${c.key}/`
    }
}))
let i = nav.findIndex((p) => p ==  "insert blog categories here")
let j = nav.findIndex((p) => p ==  "insert gallery categories here")
nav = [nav.slice(0,i), entries[0], nav.slice(i+1, j), entries[1]].flat()

const navbar = {en: undefined, fr: undefined, nl: undefined}

for (locale of ["en", "fr", "nl"]) {
    let lis = nav.map((p) => `<li><a href='/${locale}/${p.link}'>${p.title[locale]}</a>`);
    let types = nav.map((p) => p.type == "normal");
    types.push(false);
    let s = "";
    for (i=0; i<lis.length; i++) {
        s += lis[i] + ["<ul>", "</li>", "</ul></li>"][types[i+1]-types[i]+1];
    }
    navbar[locale] = `<ul><li><a href='/${locale}'>Boskanter</a></li>${s}</ul>`
}

module.exports = navbar
