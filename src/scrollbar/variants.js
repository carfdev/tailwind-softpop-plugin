const addVariants = ({ addVariant }) => {
  addVariant("scrollbar-hover", "&::-webkit-scrollbar-thumb:hover");
  addVariant("scrollbar-track-hover", "&::-webkit-scrollbar-track:hover");
  addVariant("scrollbar-corner-hover", "&::-webkit-scrollbar-corner:hover");

  addVariant("scrollbar-active", "&::-webkit-scrollbar-thumb:active");
  addVariant("scrollbar-track-active", "&::-webkit-scrollbar-track:active");
};

module.exports = {
  addVariants,
};
