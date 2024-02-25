Here content of the boskanter website can be edited. The content will be primarily written in the form of md and json files in the folder src, and then rendered into a website by the static site generator eleventy.js.

## Writing a blogpost
### How to do it
1. Create a new md file in `src/[locale]/blog/posts` where `[locale]` is the shortcode for the language in which you are writting, so either `en`, `fr` or `nl`.
2. Start the file by a front matter section
   ```
   ---
   title: [your title]
   category:
     - [your category 1]
     - [your category 2]
     - [your category 3]
     ...
   tags:
     - [your tag 1]
     - [your tag 2]
     - [your tag 3]
     ...
   ---
   ```
   Categories are meant as broader classification of your post. The available categories can be seen and edited in `/src/_data/categories.json`. Add the "key" entry of the approriate categories to your front matter. If you add "gardening" to your categories your post will for example be listed on the page `/en/blog/gardening` (if "gardening" is a category that is).

   Tags can be more unique to your post. Here you can write anything. "Garlic" could for example be a tag if you wrote about a creative recipe to use garlic from the garden. All the tags are displayed on the home page and are meant to grab the visitors attention. So think about what about your article could be interesting for people to read about.
4. Now you can write markdown code. Read more about hot it works [here](https://www.markdownguide.org/basic-syntax/). You can always click preview to see if everything is rendered the way you want it.
5. When you are finished , press "commit changes" and write a commit message. This is only for documentation, you can write for example `created post [your post title]`.

### Example
An example post about a day where we made Sauerkraut could look like this
```
---
title: Sauerkraut Saturday
category:
  - Gardening
  - Cooking
tags:
  - Sauerkraut
  - fermentation
  - cabbage
---

Today we made Sauerkraut with various cabbages from our garden.

## Cabbage selection
We used

- white cabbage
- red cabbage
- china cabbage

  - a red variety
  - a white variety

## Conclusion
Making Sauerkraut is a good way to preserve cabbage for a long time.
It is also a lot of fun. Ideally we would have spent the ***whole*** weekend with it.
```

## Editing the global data files
The folder `/src/_data/` contains so called global data files. 
| File | Purpose | Format |
|---|---|---|
| `calendar_entries.json` | Contains all the entries that are shwon in the calendar | `[ {` <br> `   date: str,` <br> `   title: { en: str, fr: str, nl: str },` <br> `   link: str` <br> `} ]`|
| `categories.json` | Contains all available categories for blogs | `[ {` <br> `   key: str,` <br> `   title: { en: str, fr: str, nl: str },` <br>` `} ]`|
| `highlights.json` | Contains all the sites that are linked to in the highlights section of the homepage | `[ {` <br> `   title: { en: str, fr: str, nl: str },` <br> `   description: { en: str, fr: str, nl: str },` <br> `   link: str` <br> `} ]`|
| `navigation_bar.json` | Contains the structure of the navigation bar | `[ {` <br> `   type: ( "big" or "small" ),` <br> `   title: { en: str, fr: str, nl: str },` <br> `   link: str` <br> `} ]`|
| `translations.json` | Contains translations for simple phrases that appear in the website, like "read more" | `{` <br> `   some_phrase: { en: str, fr: str, nl: str },` <br> `   another_phrase: { en: str, fr: str, nl: str },` <br> `   yet_another_phrase: { en: str, fr: str, nl: str },` <br> `   ...`<br> `}` |

### What is JSON and how to read this table

Here I worry is the place were mistakes can happen most easily, beacause in order for everything to be rendered correctly the JSON sytax has to be respected strictly. What is JSON? JSON is a handy way to write down data in a text format. A hopefully instructive explanation is given [here](https://www.json.org/json-en.html). I will give a little explanation too:

JSON lets us write down strings (phrases), arrays (lists) and objects (something formated like a form).

1. A string is denoted by whatever you want to write encapsulated in apostrophes. For example `"This would be a JSON string"`.
2. An array is denoted by whatever you want to list seperated by commas and encapsulated in square brackets. For example `[ "This", "would", "be", "a", "JSON", "array" ]`. It would list all the words in the sentence "This would be a JSON array".
3. An object is a bit like a form. It lists pairs of "keys" and "values", where a key describes what the value is about. One pair is denoted by `key: value`. The pairs are separated by commas and encapsulated by curly brackets. For example `{ "color": "orange", "texture": "crunchy", "contains": ["carotene", "vitamin K1", "fibres", "anti-oxidantes"]}` would be an object that describes the properties of a carrot. Be mindful that if the keys are strings, they should be written in apostrophes.

These are mostly the elements of JSON (there are also numbers and booleans, but we dont really need them). They can be combined in any new data type. This is what is denoted by "format" in the table. For example if I write `[ str ]`, I mean an array, where every entry is a string. This would be the format of the example in 2. And if I write `{ color :str, texture: str, contains: [str] }` then I mean something like in the example in 3: An object where the keys are "color", "texture" and "contains", the first two values are strings, and the last is an array of strings.

### Further explanation of the files
- `calendar_entries.json`: The date should be formated like `day-number.month-number.year-number`, for example "1.10.2024" is permissable.
- `navigation_bar.json`:  the value associated to the type key, should be either "big" or "small". "big" means it will always be displayed in the navigation bar. "small" means it will only show, when the mouse hovers over the last element in the array with type "big".
- `translations.json`: Here the format is perhaps not so clear. Every phrase that needs a translation for the website is a key in this object. The associated value is an object that contains the english, french and dutch translations of the phrase.
- 
