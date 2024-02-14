module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/pictures");
  eleventyConfig.addPassthroughCopy("./src/scripts");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addFilter("extractSubjects", function(col) {
    let subjects = [];
    for (p of col) {
      for (s of p.data.subject) {
        if (!subjects.includes(s)) {subjects.push(s);}
      }
    }
    return subjects;
  });
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '/var/www/boskanter'
    }
  };
};