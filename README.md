# How to edit the Website

First of all, to do anything on the website, you have to make a GitHub Account and ask Ine to become a collaborator on this repository. Then you can edit everything of the website right here. To apply the changes you made, go to [www.boskanter.earth/build](www.boskanter.earth/build), type in the password and click "rebuld website".

## Table of Contents

- Writing a blogpost
- Writing an article page
- Adding a picture
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
