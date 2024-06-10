const fs = require("fs")
const { sin, cos, sqrt, max, min } = require('mathjs')

const tags = []
for (locale of ['en', 'fr', 'nl']) {
    for (file of fs.readdirSync(`src/${locale}/blog/posts`)) {
        if (file == "posts.json") {continue}
        let h = fs.readFileSync(`src/${locale}/blog/posts/${file}`, { encoding: 'utf8' }).split('---\n')[1]
        let attributes = new Map(h.split('\n').map((l) => l.split(': ')))
        if (attributes.has("blogtags")) {
            for (t of attributes.get("blogtags").split(", ")) {
                tags[t] ? tags[t]++ : tags[t] = 1
            }
        }
    }
}

function spiral(n) {
    return [sin(0.1*n)*sqrt(n), cos(0.1*n)*sqrt(n)]
}

function colision(a, b) {
    return (max(a[0],b[0]) < min(a[2],b[2])) && (max(a[1],b[1]) < min(a[3],b[3]))
}

const height = 2
const tagpos = [] // [x_1, y_1, x_2, y_2]


for (t in tags) {
    let scale = sqrt(tags[t])
    let dx = t.length * scale
    let dy = height * scale
    let xyxy
    find_position:
    for (n=0; true; n++) {
        let xy = spiral(n)
        xyxy = [xy[0], xy[1], xy[0]+dx, xy[1]+dy]
        for (tp in tagpos) {
            if (colision(xyxy, tagpos[tp])) continue find_position
        }
        break find_position
    }
    tagpos[t] = xyxy
}

const dimensions = Object.values(tagpos).reduce((a, b) => [min(a[0],b[0]),min(a[1],b[1]),max(a[2],b[2]),max(a[3],b[3])],[0,0,0,0])

let svg = '<svg width="201" height="200" xmlns="http://www.w3.org/2000/svg">'
for (t in tagpos) {
    svg += `<text x="${tagpos[0]}" y="${tagpos[1]}">${t}</text>`
}