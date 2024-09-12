# How to edit the Website

First of all, to do anything on the website, you have to make a GitHub Account and ask Ine to become a collaborator on this repository. Then you can edit everything of the website right here. To apply the changes you made, go to [www.boskanter.earth/build](www.boskanter.earth/build), type in the password and click "rebuld website".

## Table of Contents

- Writing a blogpost
- Writing an article page
- Adding a picture: For general use, to be displayed in the gallery or to be used as an icon
- Editing specific pages:
	+ Homepage
	+ Calendar
	+ Gallery
	+ Blogfeed
- Editing the navigation bar
- Writing markdown


## Writing a Blogpost
1. Decide which language you want to write in: The website supports english (en), french (fr) and dutch (nl). 
2. Create a new file in `/src/en/blog/posts` if you want to write in english. If you want to write in french or dutch exchange `en` with `fr` or `nl`. Your filename should end with `.md`. I will showcase how everything works by showing exerpts fromthe blogpost `/src/en/blog/posts/a_sustainable_website.md`

3. In the first lines of the file, provide the posts metadata. It should look like this:

```
---  
title: A sustainable website  
icon: plant.svg  
category: low-tech  
blogtags: internet, low-tech, website, saving energy, privacy  
author: Philipp  
authorcountry: Germany  
---
```


Dont forget the 3 dashes in the beginning and end, and write title, icon ... just as they are written here. You can ommit any line but "title" if you dont want to provide this information. In the respective lines after ": " you have to give: 
- a title
- optionally an icon (the filename of a graphic saved in `/src/icons` - your welcome to add your own svg graphic)
- optionally a category key (available categories are written down in `/src/_data/blog/categories.js`)
- optionally a comma separated list of blogtags - this can be anything you like. Maybe try to give about 5 that describe your post
- optionally an author - just write whatever you want to be displayed
- optionally the country your from - I thought that might give an interesting glimpse into the international nature of Boskanter
	
4. After the block with metadata, you can write your post in markdown. Markdown is a specific code to write formatted text in a regular text file. See more in the chapter [writing markdown](#writing_markdwown). The first few lines after the block with metadata in a_sustainable_website.md, which include markdown code for a numbered list, a second level heading and a table, look like this for example:

```
My name is Philipp and I was a long-term volunteer in Boskanter from ...

So to summarize, when making this website, I tried to deal most ...

1. Energy usage of the website
2. How "addictive" is the website (How good is the website at giving ...
3. Privacy (What data do we collect from you, what data do we enable ...

Lets discuss how we tried to deal with that:

## Pictures

Most of the data that is sent by the old website is pictures. This is ...

|File|Size|
|---|---|
|The whole bible as a txt file| 5MB |
|A jpg picture with 1500x1500 pixels (medium resolution)|500KB = 0,5MB|

```


## Writing an article page
An article page is any page that isnt a blogpost and doesnt have a custom layout like the homepage, the calendar, the blogfeed and the gallery. It is a plain page where you can write anything that you can write in markdown. To writen an article page.
1. Decide what language the page should be in. Then create the file in `/src/en/path/to/your/file.md` if it is in english and exchange `en` by the respective acronym (`fr` or `nl`) if you write in a different language. The rendered page will then be accessible at `www.boskanter.earth/en/path/to/your/file/`. I recommend that you write most article pages of permanent relevance in all languages if you have the time. Then it is important that all three of them have, besides the different language acronyms, the same filepath, so for example `/src/en/path/to/your/file.md`, `/src/fr/path/to/your/file.md` and `/src/nl/path/to/your/file.md`. Then when people change the language of the site, they are transfered to the version of your page written in the respective language.
2. In the first few lines you have to provide some metadata enclosed by two lines with three dashes - in this case only the title and the layout, which has to be `layouts/article.html`. Alltogheter it could look like this:
```
---
title: directions
layout: layouts/article.html
---
```
3. After the block with metadata, you can write your post in markdown. Markdown is a specific code to write formatted text in a regular text file. See more in the chapter [writing markdown](#writing_markdwown).


## Adding a picture: For general use, to be displayed in the gallery or to be used as an icon

### For general use
Upload the picture in `/src/pictures` and rebuild the website. The picture will then be available at `www.boskanter.earth/pictures/filname.jpg`. You can then add it to your pages by writing `![write image description here](www.boskanter.earth/pictures/filname.jpg)`.

### To be displayed in the gallery
To put a pciture in the gallery, you (1) add it just as a regular picture and then (2) tell the website that this picture belongs in the gallery. To do that
1. Do everything described in the previous section.
2. Open `/src/_data_gallery/pictures.json`. You will see, that the file has the general structure of a comma seperated lists of blocks wrapped in curly brackets. The list itself is in turn wrapped in square brackets. To add the picture to the gallery, add a new block with curly brackets (dont forget to add a new comma after the previous one). It should look like this:
```
    {
        "key": "pizzafeestje.jpg",
        "date": "10.1.2024",
        "category": "something",
        "description": {"en": "pizza party", "fr": "pizza", "nl": "pizzafeestje"}
    }
```

Here you can also ommit the lines "date" and "category". It is very important that you respect the JSON syntax (otherwise an error will pe produced): Remember to put a comma after each line but the last one and wrap any word or sentence in quotation marks. The order of entries is not important. In the respective lines after ": " you have to give:

- The name of your file as you uploaded it to `pictures`
- Optionally a date
- Optionally a categorykey (The available categorykeys are written down and can be edited in `/src/_data/gallery/categories.js`)
- A description object, with descriptions in english, french and dutch


## Editing specific pages

### The Homepage
The content of the homepage feeds itself from three files in `/src/_data/homepage`: `blogtags.js`, `yellowbox.json` and `highlights.json`.

#### blogtags.js

`blogtags.js`is responsible for generating the word cloud with tags from the blog. The default behavior is, that the 30 tags that appear the most are used for the wordcloud (you can modify this number by changing the line `const numberOfTags = 30` to a different number). If you want to control yourself what appears in the wordcloud and with which size, write the following between the two lines `\\ edit after here`, `\\ edit before here`:

```
// edit after here

tags = {
	"a tag": 10,
 	"another tag": 20,
  	"yet another tag": 10,
	"add": 1,
 	"as": 4,
  	"many": 5,
   	"as": 10,
	"you": 100,
 	"like": 200
}

// edit before here
```

Between the brackets you can write your desired words with a number (in the default behaviour this number is the number of appearances as a tag). In the wordcloud the area of each letter of the word will be proportional to this number. If you want the default beavior just make sure that the lines between the two are empty. Also pay attention to the correct syntax: Write a comma after each line between the brackets but the last one.


#### yellowbox.json

This one is responsible for filling the yellow box with content. I saw it as space for a little introduction, but of course anything can go in there. In the file there is an object with the attributes `"en"`, `"fr"` and `"nl"`. After the colon, write, enclosed by qoutes, the content in the specified language. You can also write HTML (but no markdown), to add a heading (`<h1>...</h1>`)








