// PLEASE EDIT HERE

let nav = [
    {
        type: "normal",
        title: {en: "who we are", fr: "qui sommes-nous?", nl: "wie we zijn"},
        link: "principles"
    },
    {
        type: "subordinated",
        title: {en: "who we are", fr: "qui sommes-nous?", nl: "wie we zijn"},
        link: "principles"
    },
    {
        type: "subordinated",
        title: {en: "permaculture", fr: "permaculture", nl: "permakultuur"},
        link: "principles/permakultuur"
    },
    {
        type: "subordinated",
        title: {en: "transition towns",  fr: "villes en transition",  nl: "stransition towns"},  
        link: "principles/transition_towns"
    },
    {
        type: "subordinated",
        title: {en: "links",  fr: "links",  nl: "links"},  
        link: "principles/links"
    },
    {
        type: "normal",
        title: {en: "practical",  fr: "practical",  nl: "praktisch"},
        link: "praktisch"
    },
    {
        type: "subordinated",
        title: {en: "practical",  fr: "practical",  nl: "praktisch"},
        link: "praktisch"
    },
    {
        type: "subordinated",
        title: {en: "local volunteer",  fr: "volontair local",  nl: "plaatselijke vrijwilliger"},  
        link: "praktisch/vrijwilliger"
    },    
    {
        type: "subordinated",
        title: {en: "activities",  fr: "activités",  nl: "activiteiten"}, 
        link: "praktisch/activiteiten"
    },
    {
        type: "subordinated",
        title: {en: "co-housing",  fr: "habitat commun",  nl: "samenwonen"}, 
        link: "praktisch/cohousen"
    },
    {
        type: "subordinated",
        title: {en: "your activity in Boskanter",  fr: "votre activité à Boskanter",  nl: "jouw activiteit op Boskanter"}, 
        link: "praktisch/infrastructuur"
    },
    {
        type: "subordinated",
        title: {en: "the way to Boskanter",  fr: "la route vers Boskanter",  nl: "de weg naar Boskanter"}, 
        link: "contact"
    },
    {
        type: "subordinated",
        title: {en: "workaway volunteering",  fr: "workaway",  nl: "workaway"}, 
        link: "volunteering#workaway"
    },
    {
        type: "subordinated",
        title: {en: "ESC - European Solidarity Corps",  fr: "ESC - European Solidarity Corps",  nl: "ESC - European Solidarity Corps"}, 
        link: "ESC"
    },
    {
        type: "normal",
        title: {en: "blog",  fr: "blog",  nl: "blog"}
    },

    "insert blog categories here", 
    
    {
        type: "normal",
        title: {en: "calendar",  fr: "calendrier",  nl: "kalender"},  
        link: "calendar"
    },
    {
        type: "normal",
        title: {en: "Gallery", fr: "Galerie", nl: "Galerij"}
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

function link(l, locale) {
    return ["en/", "fr/", "nl/"].includes(l.slice(0,3)) ? l : locale + "/" + l 
}

const navbar = {en: undefined, fr: undefined, nl: undefined}

for (locale of ["en", "fr", "nl"]) {
    let lis = nav.map((p) => "<li>" + (p.link ? `<a href='/${link(p.link, locale)}'>` : "") + p.title[locale] + (p.link ? "</a>" : ""))
    let types = nav.map((p) => p.type == "normal");
    types.push(false);
    let s = "";
    for (i=0; i<lis.length; i++) {
        s += lis[i] + ["<ul>", "</li>", "</ul></li>"][types[i+1]-types[i]+1];
    }
    navbar[locale] = `<ul><li><a href='/${locale}'>Boskanter</a></li>${s}</ul>`
}

module.exports = navbar
