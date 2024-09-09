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

3. In the first lines of the file, provide the posts metadata. It sould look like this:

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
	
4. After the block with metadata, you can write your post in markdown. Markdown is a specific code to write formatted text in a regular text file. See more in the chapter [writing markdown](#writing_markdwown)


## Writing an article page
An article page is any page that isnt a blogpost and doesnt have a custom layout like the homepage, the calendar, the blogfeed and the gallery. It is a plain page where you can write anything that you can write in markdown.