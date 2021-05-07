// docs: https://www.11ty.io/docs/config/
module.exports = function (eleventyConfig) {
  // eleventyConfig.addFilter( "myFilter", function() {});
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addFilter('log', value => {
    console.log(value)
  })

  eleventyConfig.addCollection("monsters", collection => {
    const allMons = [...collection.getFilteredByGlob("./src/monsters/*.md")]
      //.filter(s => s.data.published !== false)
      //.reverse();
    return allMons;
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site"
    }
  };
};