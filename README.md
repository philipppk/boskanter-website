Here content of the boskanter website can be editet. The content will be primarily written in the form of md and json files in the folder src, and then rendered into a website by the static site generator eleventy.js.

## Writing a blogpost
### How to do it
1. Create a new md file in `src/[locale]/blog/posts` where `[locale]` is the shortcode for the language in which you are writting, so either `en`, `fr` or `nl`.
2. Start the file by a section
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
3. Now you can write markdown code. Read more about hot it works [here](https://www.markdownguide.org/basic-syntax/). You can always click preview to see if everything is rendered the way you want it.

### Example
An example post about a day where we made Sauerkraut could look like this
```
---
title: Sauerkraut Samstag
category:
  - Gardening
  - Cooking
tags:
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
