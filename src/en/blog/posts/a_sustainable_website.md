---
title: A sustainable website
icon: plant.svg
category: low-tech
blogtags: internet, low-tech, website, saving energy, privacy
author: Philipp
authorcountry: Germany
---
My name is Philipp and I was a long-term volunteer in Boskanter from October 2023 to July 2024. After my ten months in Boskanter I will now start a Master in IT Security back in Germany. Making this Wesbite was a big contribution to what lead me on that path. The energy consumption of the internet, our consumption of media on the internet and the amounts of data that are stolen from us on the internet is ever increasing. To make this website an example of how things can be different, I made a lot things from scratch: I set up a webserver, I wrote all the code to enable writing and sending newsletters and I wrote all of the website in HTML (with the help of the static site generator eleventy). I am very happy that I was able to learn so much, while working on a big project that is helpful to somebody. 

So to summarize, when making this website, I tried to deal most responsibly with:

1. Energy usage of the website
2. How "addictive" is the website (How good is the website at giving you the information you need instead of making you waste time on there)
3. Privacy (What data do we collect from you, what data do we enable others to collect from you)

Lets discuss how we tried to deal with that:

## Pictures

Most of the data that is sent by the old website is pictures. This is not very surprising: Raw Text (or more formatted text like HTML) usually only makes up a small portion of the data we transfer. I want to give a little example:

|File|Size|
|---|---|
|The whole bible as a txt file| 5MB |
|A jpg picture with 1500x1500 pixels (medium resolution)|500KB = 0,5MB|

Therefore, just 10 medium resolution pictures already make up for a lot of text.

I think we can reduce the energy consumption of the internet a lot if we used it more text-based again. This is why I avoided to use images for decoration, like the old website did. All images are SVG graphics (that is text instructions that the browser later draws) or very compressed. 

Sometimes though, you just want to show a picture, because you want people to see, how it looks here for example.
In that case the idea is that good quality jpg images can be viewed in the gallery - but only after having conciously clicked on a button "view uncompressed version", so the browser does not load any unnecessarily. Before we will only display a very compressed version of the picture in the gallery.

The article ["Why We need a Speed Limit for the Internet"](https://solar.lowtechmagazine.com/2015/10/why-we-need-a-speed-limit-for-the-internet/) by low-tech magazine makes the point that paradoxically the energy consumption of the internet has increased, even though the efficiency of its infra structure has improved a lot. 

One among other reasons is that different media is transfered over the internet now: For example we are now able to make a video call instead of being limited to writing each other emails - We spend more time on the internet, because the content is more engaging, and per piece the content consists of more data, so that it is more engaging. This leads to a lot more energy being consumed - and we also spend a lot more time with (often mindless) consumption on the internet.

## Redundant Computations

This point is more technical, but I use the static site generator eleventy to put the website together, instead of a content management system like wordpress. I will not go into detail to explain the difference, but in essence our webserver does a lot of computation in advance now, that the old one was doing over and over again for every visitor. Even though it was the same computation every time.

## Newsletter

Most modern newsletter services build tracking links into the emails that are sent. By that, they can determine which links a reader clicked on and (not with full certainty) if the newsletter has been read at all. We find this invasive and do not want to use it. It wouldn't have been strictly necessary, because for many services, this tracking can be disabled, but I decided to write a newsletter programm myself. By that, Boskanter can also send as many emails over the newsletter as they want, without paying for a subscription.

## Cookies

Although cookies aren't bad by themselves, now they are used by all sorts of companies to track our movement over the internet. Since the GDPR, websites are obliged to inform consumers to ask for consumers consent before setting a cookie. To comply with this, websites often use cookie banners, that have evolved to make it as hard for consumers as possible to disable cookies.

According to Ine, the old websites was sometimes setting cookies because it was programmed into some WordPress plugins. Wether they were miscellaneous or not, I do not know, but I dont see why they would be necessary.

By switching away from WordPress and writing a lot more myself, I have full insight into how the website behaves, so I can be sure that none of our visitors is tracked by some third party plugin.