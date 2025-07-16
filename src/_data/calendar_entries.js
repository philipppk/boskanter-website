// EDIT HERE

const entries = [
    {
        start: "23.7.2025",
        end: "23.7.2025", 
        title: {en: "crafts 14.00-16.00 flint", nl: "ambachten 14.00-16.00 vuursteen", fr: "artisanat 14.00-16.00 silex"}, 
        description: {en: "We will try to make flintstone 'knifes'. We have some flint stone from the North of France. No success guaranteed :-).<p>'Look for more info about the crafts afternoon on the activity page.'</p>", nl: "We gaan proberen een vuurstenen 'mes' te maken. We hebben een paar vuursteen knollen uit Noord-Frankrijk. Geen succes gegarandeerd :-). Check voor meer info over het verloop van de ambachten namiddag de activiteiten pagina.", fr: "Lis, pour plus information sur le déroulement des après midi artisanal notre page 'activités'."}
    },
    {
        start: "28.7.2025",
        end: "28.7.2025", 
        title: {en: "momo 19.30-21.00", nl: "momo - 19.30-21.00", fr: "momo - 19.30-21.00"}, 
        description: {en: "Click <a href='https://www.boskanter.earth/en/praktisch/activiteiten'>here</a> for details.", nl: "Clik <a href='https://www.boskanter.earth/nl/praktisch/activiteiten#momo - monday moment'>hier</a> voor details.", fr: "Click <a href='https://www.boskanter.earth/nl/praktisch/activiteiten'>here</a> for details."}
    },
    {
        start: "30.7.2025",
        end: "30.7.2025", 
        title: {en: "crafts afternoon: rope making", nl: "ambachten namiddag: touw maken", fr: "après-midi artisanat: créer un fil"}, 
        description: {en: "Click <a href='./en/praktisch/activiteiten'>here</a> for details.", nl: "Clik <a href='./en/praktisch/activiteiten'>hier</a> voor details.", fr: "Click <a href='./en/praktisch/activiteiten'>here</a> for details."}
    },
    {
        start: "6.8.2025",
        end: "6.8.2025", 
        title: {en: "crafts afternoon: wooden spoon", nl: "ambachten namiddag: houten lepel", fr: "après-midi artisanat: cuiler en bois"}, 
        description: {en: "Click <a href='./en/praktisch/activiteiten'>here</a> for details.", nl: "Clik <a href='./en/praktisch/activiteiten'>hier</a> voor details.", fr: "Click <a href='./en/praktisch/activiteiten'>here</a> for details."}
    },
    {
        start: "8.8.2025",
        end: "8.8.2025", 
        title: {en: "Pizza Party", nl: "Pizza Party", fr: "Pizza Party"}, 
        description: {en: "Click <a href='./en/praktisch/activiteiten'>here</a> for details.", nl: " meer info: ... ", fr: " ... "}
    },
    {
        start: "13.8.2025",
        end: "13.8.2025", 
        title: {en: "crafts afternoon: willow basket", nl: "ambachten namiddag: mand van wilgen tenen", fr: "après-midi artisanat: panier"}, 
        description: {en: "Click <a href='./en/praktisch/activiteiten'>here</a> for details.", nl: "Clik <a href='./en/praktisch/activiteiten'>hier</a> voor details.", fr: "Click <a href='./en/praktisch/activiteiten'>here</a> for details."}
    },
    {
        start: "18.8.2025",
        end: "23.8.2025",
        title: {en: "camping week", fr: "semaine de camping", nl: "kampeerweek"},
        description: {en: "", nl: "", fr: ""}
    },
    {
        start: "20.8.2025",
        end: "20.8.2025", 
        title: {en: "crafts afternoon: crochéing and nitting", nl: "ambachten namiddag: breien en haken", fr: "après-midi artisanat: crocher et trickoter"}, 
        description: {en: "Click <a href='./en/praktisch/activiteiten'>here</a> for details.", nl: "Clik <a href='./en/praktisch/activiteiten'>hier</a> voor details.", fr: "Click <a href='./en/praktisch/activiteiten'>here</a> for details."}
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
