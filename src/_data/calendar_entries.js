// EDIT HERE

const entries = [
    {
        start: "23.7.2025",
        end: "23.7.2025", 
        title: {en: "14h00-16h00: crafts", nl: "14u00-16u00: ambachten", fr: "14h00-16h00: artisanat"}, 
        description: {en: "...", nl: "We gaan proberen een vuurstenen 'mes' te maken. We hebben een paar vuursteen knollen uit Noord-Frankrijk. Geen succes gegarandeerd :-). <a href='https://www.boskanter.earth/nl/offer/activities#ambachten'> Meer info over ambachtsmomenten. </a>", fr: "..."}
    },
    {
        start: "28.7.2025",
        end: "28.7.2025", 
        title: {en: "19h30-21h00: momo ", nl: "19u30-21u00: momo", fr: "19h30-21h00: momo"}, 
        description: {en: "<a href='https://www.boskanter.earth/en/offer/activities#ambachten'>More information about momo's. /a>", nl: "<a href='https://www.boskanter.earth/nl/offer/activities#ambachten'> Meer info over momo's. </a>", fr: "..."}
    },
    {
        start: "30.7.2025",
        end: "30.7.2025", 
        title: {en: "14h00-16h00: crafts", nl: "14u00-16u00: ambachten", fr: "14h00-16h00: artisanat"}, 
        description: {en: "...", nl: "We gaan spinnen met de handtol. <a href='https://www.boskanter.earth/nl/offer/activities#ambachten'> Meer info over ambachtsmomenten. </a>", fr: "..."}
    },
    {
        start: "4.8.2025",
        end: "4.8.2025", 
        title: {en: "19h30-21h00: momo ", nl: "19u30-21u00: momo", fr: "19h30-21h00: momo"}, 
        description: {en: "<a href='https://www.boskanter.earth/en/offer/activities#ambachten'>More information about momo's. /a>", nl: "<a href='https://www.boskanter.earth/nl/offer/activities#ambachten'> Meer info over momo's. </a>", fr: "..."}
    },
    {
        start: "6.8.2025",
        end: "6.8.2025", 
        title: {en: "14h00-16h00: crafts", nl: "14u00-16u00: ambachten", fr: "14h00-16h00: artisanat"}, 
        description: {en: "...", nl: "Vandaag legt Ine de vrijwilligers uit hoe je een houten lepel maakt. <a href='https://www.boskanter.earth/nl/offer/activities#ambachten'> Meer info over ambachtsmomenten. </a>", fr: "..."}
    },
    {
        start: "8.8.2025",
        end: "8.8.2025", 
        title: {en: "16h00*17h30: tour", nl: "16u00-17u30: rondleiding", fr: "16h00-17h30: tour"}, 
        description: {en: "...", nl: "<a href='https://www.boskanter.earth/nl/offer/activities#tour'> Meer info over rondleidingen. </a>", fr: "..."}
    },
    {
        start: "8.8.2025",
        end: "8.8.2025", 
        title: {en: "18h00-22h00: Pizza Party", nl: "18u00-22u00: Pizza Party", fr: "18h00-22h00: Pizza Party"}, 
        description: {en: "...", nl: "<a href='https://www.boskanter.earth/nl/offer/activities'> Meer info over pizzafeestjes. </a>", fr: "..."}
    },
    {
        start: "11.8.2025",
        end: "11.8.2025", 
        title: {en: "19h30-21h00: momo ", nl: "19u30-21u00: momo", fr: "19h30-21h00: momo"}, 
        description: {en: "<a href='https://www.boskanter.earth/en/offer/activities#ambachten'>More information about momo's. /a>", nl: "<a href='https://www.boskanter.earth/nl/offer/activities#ambachten'> Meer info over momo's. </a>", fr: "..."}
    },
    {
        start: "13.8.2025",
        end: "13.8.2025", 
        title: {en: "14h00-16h00: crafts", nl: "14u00-16u00: ambachten", fr: "14h00-16h00: artisanat"}, 
        description: {en: "...", nl: "We gaan aan de slag met wilgentenen. Op twee uur kan je geen wilgen mand maken. Als je niet je eigen mandenvlechtproject meebrengt of opstart waaraan je later verderwerkt, kan wel een paar technieken oefenen. <a href='https://www.boskanter.earth/nl/offer/activities#ambachten'> Meer info over ambachtsmomenten. </a>", fr: "..."}
    },
    {
        start: "18.8.2025",
        end: "23.8.2025",
        title: {en: "continuously: camping week", fr: "toute la journée: semaine de camping", nl: "doorlopend: kampeerweek"},
        description: {en: "...", nl: "Deze week staan de deuren van onze camping open. <a href='https://www.boskanter.earth/nl/offer/activities#kampeerweek'> Meer info over de kampeerweek. </a>", fr: "..."}
    },
    {
        start: "18.8.2025",
        end: "18.8.2025", 
        title: {en: "19h30-21h00: momo ", nl: "19u30-21u00: momo", fr: "19h30-21h00: momo"}, 
        description: {en: "<a href='https://www.boskanter.earth/en/offer/activities#ambachten'>More information about momo's. /a>", nl: "<a href='https://www.boskanter.earth/nl/offer/activities#ambachten'> Meer info over momo's. </a>", fr: "..."}
    },
    {
        start: "20.8.2025",
        end: "20.8.2025", 
        title: {en: "14h00-16h00: crafts", nl: "14u00-16u00: ambachten", fr: "14h00-16h00: artisanat"}, 
        description: {en: "...", nl: "We gaan breien en haken of whatever de deelnemers inbrengen. <a href='https://www.boskanter.earth/nl/offer/activities#ambachten'> Meer info over ambachtsmomenten. </a>", fr: "..."}
    },
    {
        start: "22.8.2025",
        end: "22.8.2025", 
        title: {en: "16h00*17h30: tour", nl: "16u00-17u30: rondleiding", fr: "16h00-17h30: tour"}, 
        description: {en: "...", nl: "<a href='https://www.boskanter.earth/nl/offer/activities#tour'> Meer info over rondleidingen. </a>", fr: "..."}
    },
    {
        start: "22.8.2025",
        end: "22.8.2025", 
        title: {en: "18h00-22h00: Pizza Party", nl: "18u00-22u00: Pizza Party", fr: "18h00-22h00: Pizza Party"}, 
        description: {en: "...", nl: "<a href='https://www.boskanter.earth/nl/offer/activities#am'> Meer info over pizzafeestjes. </a>", fr: "..."}
    },
    {
        start: "25.8.2025",
        end: "25.8.2025", 
        title: {en: "19h30-21h00: momo ", nl: "19u30-21u00: momo", fr: "19h30-21h00: momo"}, 
        description: {en: "<a href='https://www.boskanter.earth/en/offer/activities#ambachten'>More information about momo's. /a>", nl: "<a href='https://www.boskanter.earth/nl/offer/activities#ambachten'> Meer info over momo's. </a>", fr: "..."}
    },
]

// DONT EDIT AFTER HERE

function parseDate(d) {
    return new Date(d.split(".").reverse())
}

function getDaysArray(e) {
    if (e.start == e.end) {
        return [{
            date: parseDate(e.start).toDateString(),
            title: e.title,
            description: e.description
        }]
    }
    const arr = []
    let day = 1
    for (const dt = parseDate(e.start); dt <= parseDate(e.end); dt.setDate(dt.getDate()+1)) {
        arr.push({
            date: dt.toDateString(), 
            title: {en: `${e.title.en} (${day})`, fr: `${e.title.fr} (${day})`, nl: `${e.title.nl} (${day})`}, 
            description: e.description})
        day += 1
    }
    return arr
};

entries.sort((a, b) => parseDate(a.start) < parseDate(b.start))

module.exports = entries.map(getDaysArray).flat()
