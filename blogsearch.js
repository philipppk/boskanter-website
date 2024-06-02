const MiniSearch = require('minisearch')
const fs = require("fs")

const categories = JSON.parse(fs.readFileSync("src/_data/categories.json")).map((c) => c.key)

function scanPosts() {
    const posts = []
    for (locale of ['en', 'fr', 'nl']) {
        for (file of fs.readdirSync(`src/${locale}/blog/posts`)) {
            if (file == "posts.json") {continue}
            let h = fs.readFileSync(`src/${locale}/blog/posts/${file}`, { encoding: 'utf8' }).split('---\n')
            let attributes = new Map(h[1].split('\n').map((l) => l.split(': ')))
            posts.push({
                title: attributes.get("title"),
                tags: attributes.get("blogtags"),
                category: attributes.get("category"),
                id: `/${locale}/blog/posts/${file.slice(0,-3)}/`,
                language: locale,
                content: h[2],
            })
        }
    }
    return posts
}

const postsbycategory = []
const categorysearch = []
for (c of categories) {
    postsbycategory[c] = []
    categorysearch[c] = new MiniSearch({
        fields: ['title', 'content', 'tags'], // fields to index for full-text search
        storeFields: ['title', 'id', 'category', 'tags', 'language'] // fields to return with search results
    })
}

for (p of scanPosts()) {
    postsbycategory["all"].push(p)
    try {
        postsbycategory[p.category].push(p)
    }
    catch {}
}

for (c of categories) {
    categorysearch[c].addAll(postsbycategory[c])
}

for (p of postsbycategory) {
    delete p.content
}

module.exports = {category: categorysearch, posts: postsbycategory}