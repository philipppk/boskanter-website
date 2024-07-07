// EDIT HERE

const entries = [
    {
        start: "23.7.2024",
        end: "23.7.2024", 
        title: {en: "Pizza Party", nl: "Pizza Party", fr: "Pizza Party"}, 
        description: {en: "", nl: "", fr: ""}
    },
    {
        start: "8.7.2024",
        end: "28.7.2024",
        title: {en: "Workcamp", fr: "Workcamp", nl: "Workcamp"},
        description: {en: "", nl: "", fr: ""}
    } 
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