const MiniSearch = require('minisearch')
const fs = require("fs")
const execSync = require("child_process").execSync

const categories = require('./src/_data/blog/categories.js').short.map((c) => c.key)

function fileCreationDate(path) {
    return  ("" + execSync(`git log --follow --format=%ad --date=format:'%d.%m.%Y' ${path} | tail -1`)).slice(0,-1)
}

console.log(fileCreationDate("src/en/contact.md"))

function scanPosts() {
    const posts = []
    for (locale of ['en', 'fr', 'nl']) {
        for (file of fs.readdirSync(`src/${locale}/blog/posts`)) {
            if (file == "posts.json") {continue}
            const path = `src/${locale}/blog/posts/${file}`
            let [, metadata, content] = fs.readFileSync(path, { encoding: 'utf8' }).split('---\n')
            metadata = new Map(metadata.split('\n').map((l) => l.split(': ')))
            posts.push({
                title: metadata.get("title"),
                icon: metadata.get("icon"),
                tags: metadata.get("blogtags"),
                category: metadata.get("category"),
                author: metadata.get("author"),
                authorcountry: metadata.get("authorcountry"),
                date: metadata.has("date") ? metadata.get("date") : fileCreationDate(path),
                id: `/${locale}/blog/posts/${file.slice(0,-3)}/`,
                language: locale,
                content: content,
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
        storeFields: ['title', 'id', 'icon', 'date', 'category', 'tags', 'language'] // fields to return with search results
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

for (c of categories) {
    for (p of postsbycategory[c]) {
        console.log(p)
        delete p.content
    }
}

module.exports = {category: categorysearch, posts: postsbycategory}