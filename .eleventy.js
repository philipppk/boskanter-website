const categories = require("./src/_data/gallery/categories");

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
