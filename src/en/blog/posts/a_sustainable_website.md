---
title: A sustainable website
icon: plant.svg
category: low-tech
blogtags: internet, low-tech, website, saving energy, privacy
author: Philipp
authorcountry: Germany
---
As you might have noticed, if you are familliar with the old Boskanter Website, this one has a very bare look to it and many pictures do not look great. 

My name is Philipp and I was a long-term volunteer in Boskanter from October 2023 to July 2024. After my ten months in Boskanter I am continuing my studies and am on my way now to obtain a master in IT-security. I made this website pretty much from scratch and meanwhile tried to apply the inspiration that I got from our way of living in Boskanter.

For the moment Boskanter needs a website and I wanted to make it in a way that deals most responsibly with:

1. Energy usage and climate impact
2. Privacy and the threat of having our data robbed by Google and co.

So I want to explain what the current website does better than the old one:

## Energy Usage

### Pictures

Most of the data that is sent by the old website is pictures. This is true in general for the Internet: Raw Text (or more formatted text like HTML) usually only makes up a small portion of the data we transfer. To illustrate that: The whole bible as an uncompressed txt file occupies about 5MB. A jpg picture in medium resolution (that is about 1500x1500 pixels) comes in at about 500KB. This is already a 10th of the size of the bible txt. So for every 10 medium resolution pictures I put on this website, our server has to transfer the equivalent of the whole text of the bible in data.

Therefore it makes a lot of sense to try to have our website be more text-based. This is why I avoided to use images for decoration, like the old website did. All images are SVG graphics (that is text instructions that the browser later draws) or very compressed by default. The idea is that high quality jpg images can be viewed in the gallery - after having conciously clicked a button "view uncompressed version", instead of the browser loading all of them in high resolution unnecessarily.

The article ["Why We need a Speed Limit for the Internet"](https://solar.lowtechmagazine.com/2015/10/why-we-need-a-speed-limit-for-the-internet/) by low-tech magazine makes the point that paradoxically the energy consumption of the internet has increased, even though the efficiency of its infra structure improved immensely. One among other reasons is that more data heavy media is transfered over the internet: For example we are now able to make a video call instead of being limited to writing each other emails. 

It is amazing how the internet is able to connect people all over the world. This, however is also possible in a way that uses less resources: Information can be conveyed very efficiently by a text and maybe a few compressed pictures without 4K resolution. That is what we want to put into practice with this website.

### Redundant Computations

This point is more technical, but I use a static site generator to put the website together, instead of a content management system (the old website was using wordpress). I will not go into detail to explain the difference, but in essence our webserver does a lot of computation in advance now, that the old one was doing over and over again for every visitor. Even though it was the same computation every time.

## Privacy

### Newsletter

Most modern newsletter services build tracking links into the emails that are sent. By that, they can determine which links a reader clicked on and (not with full certainty) if the newsletter has been read at all. We find this invasive and do not want to use it. It wouldn't have been strictly necessary, because for many services, this tracking can be disabled, but I decided to write a newsletter programm myself. By that, Boskanter can also send as many emails over the newsletter as they want, without paying for a subscription.

### Cookies

Although cookies aren't bad by themselves, now they are used by companies like Google to track our movement over the internet. Since the GDPR, websites are obliged to inform consumers to ask for consumers consent before setting a cookie. To comply with this, websites often use cookie banners, that have evolved to make it as cumbersome for consumers as possible to disable cookies. Furthermore cookies are labeled as "essential", when they are surely not essential at all: In my opinion a website, that doesn't require you to log in, shouldn't have to use any cookies at all.

According to Ine, the old websites was sometimes setting cookies because it was programmed into some WordPress plugins. Wether they were miscellaneous or not, I do not know, but they were not necessary.

By switching away from WordPress and writing a lot more myself, I had the full control over any cookies. Now I can sleep well knowing that I created a website that is entirely free from cookies.