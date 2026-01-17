const plugin = require("tailwindcss/plugin");
const {
  addBaseStyles,
  addBaseSizeUtilities,
  addColorUtilities,
  addRoundedUtilities,
  addSizeUtilities,
} = require("./utilities");
const { addVariants } = require("./variants");

module.exports = plugin((tailwind) => {
  addBaseStyles(tailwind, "standard");
  addBaseSizeUtilities(tailwind, "standard");
  addColorUtilities(tailwind);
  addVariants(tailwind);

  addRoundedUtilities(tailwind);
  addSizeUtilities(tailwind);
});
