module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/pictures");
  eleventyConfig.addPassthroughCopy("./src/scripts");
  return {
    dir: {
      input: 'src',
      output: '/var/www/boskanter'
    }
  };
};