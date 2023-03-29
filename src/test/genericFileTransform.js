// See https://stackoverflow.com/questions/58603201/jest-cannot-load-svg-file
// See https://stackoverflow.com/a/59062195/5476186
module.exports = {
  process() {
    return {
      code: `module.exports = {};`,
    };
  },
  getCacheKey() {
    // The output is always the same.
    return "genericFileTransform";
  },
};
