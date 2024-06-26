module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/pictures");
  eleventyConfig.addPassthroughCopy("./src/scripts");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/build");

  eleventyConfig.addFilter("extractSubjects", function(col) {
    let subjects = [];
    for (p of col) {
      for (s of p.data.subject) {
        if (!subjects.includes(s)) {subjects.push(s);}
      }
    }
    return subjects;
  });
  
  eleventyConfig.addFilter("reformatCalendarEntries", function(entries) {
    let events = [];
    for (e of entries) {
      date = e.date.split(".").map(parseInt);
      events.push({ date : date[2] + ", " + (date[1]-1) + ", " + date[0], title: e.title, link: e.link });
    }
    return events;
  });

  eleventyConfig.addFilter("buildNavBar", function(pages, blogcats, locale) {
    // first adding blogcats into pages
    let entriesBlogCats = blogcats.map((c) => {
      return {
        type: "subordinated",
        title: c.title,
        link: `blog/${c.key}/`
      }
    })
    let i = pages.findIndex((p) => p ==  "command: insert here all blog categories subordinated")
    
    pages = [pages.slice(0,i), entriesBlogCats, pages.slice(i+1, pages.length)].flat()
    
    let lis = pages.map((p) => `<li><a href='/${locale}/${p.link}'>${p.title[locale]}</a>`);
    let types = pages.map((p) => p.type == "normal");
    types.push(false);
    let s = "";
    for (i=0; i<lis.length; i++) {
    	s += lis[i] + ["<ul>", "</li>", "</ul></li>"][types[i+1]-types[i]+1];
    }
    return `<ul><li><a href='/${locale}'>Boskanter</a></li>${s}</ul>`;
  });

  eleventyConfig.addFilter("removeLocale", function(url) {
    return url.slice(4)
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '_site'
    }
  };
};
