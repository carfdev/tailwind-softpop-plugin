const flattenColorPaletteImport = require("tailwindcss/lib/util/flattenColorPalette");

const importDefault = (mod) => (mod && mod.__esModule ? mod.default : mod);

const flattenColorPalette = importDefault(flattenColorPaletteImport);

const COMPONENTS = ["track", "thumb", "corner"];

const scrollbarProperties = (properties, preferPseudoElements) => {
  if (preferPseudoElements) {
    return {
      "@supports (-moz-appearance:none)": properties,
    };
  }

  return properties;
};

const addBaseStyles = ({ addBase }, preferredStrategy) => {
  addBase({
    "*": scrollbarProperties(
      {
        "scrollbar-color": "initial",
        "scrollbar-width": "initial",
      },
      preferredStrategy === "pseudoelements",
    ),
  });
};

const generateBaseUtilities = () => ({
  ...Object.fromEntries(
    COMPONENTS.map((component) => {
      const base = `&::-webkit-scrollbar-${component}`;

      return [
        [
          base,
          {
            "background-color": `var(--scrollbar-${component})`,
            "border-radius": `var(--scrollbar-${component}-radius)`,
          },
        ],
      ];
    }).flat(),
  ),
});

const generateScrollbarSizeUtilities = ({ preferPseudoElements }) => ({
  ".scrollbar": {
    ...generateBaseUtilities(),
    ...scrollbarProperties(
      {
        "scrollbar-width": "auto",
        "scrollbar-color":
          "var(--scrollbar-thumb, initial) var(--scrollbar-track, initial)",
      },
      preferPseudoElements,
    ),

    "&::-webkit-scrollbar": {
      display: "block",
      width: "var(--scrollbar-width, 16px)",
      height: "var(--scrollbar-height, 16px)",
    },
  },

  ".scrollbar-thin": {
    ...generateBaseUtilities(),
    ...scrollbarProperties(
      {
        "scrollbar-width": "thin",
        "scrollbar-color":
          "var(--scrollbar-thumb, initial) var(--scrollbar-track, initial)",
      },
      preferPseudoElements,
    ),

    "&::-webkit-scrollbar": {
      display: "block",
      width: "8px",
      height: "8px",
    },
  },

  ".scrollbar-none": {
    ...scrollbarProperties(
      {
        "scrollbar-width": "none",
      },
      preferPseudoElements,
    ),

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

const toColorValue = (maybeFunction) =>
  typeof maybeFunction === "function" ? maybeFunction({}) : maybeFunction;

const addColorUtilities = ({ matchUtilities, theme }) => {
  const themeColors = flattenColorPalette(theme("colors"));
  const colors = Object.fromEntries(
    Object.entries(themeColors).map(([k, v]) => [k, toColorValue(v)]),
  );

  COMPONENTS.forEach((component) => {
    matchUtilities(
      {
        [`scrollbar-${component}`]: (value) => ({
          [`--scrollbar-${component}`]: toColorValue(value),
        }),
      },
      {
        values: colors,
        type: "color",
      },
    );
  });
};

const addRoundedUtilities = ({ theme, matchUtilities }) => {
  COMPONENTS.forEach((component) => {
    matchUtilities(
      {
        [`scrollbar-${component}-rounded`]: (value) => ({
          [`--scrollbar-${component}-radius`]: value,
        }),
      },
      {
        values: theme("borderRadius"),
      },
    );
  });
};

const addBaseSizeUtilities = ({ addUtilities }, preferredStrategy) => {
  addUtilities(
    generateScrollbarSizeUtilities({
      preferPseudoElements: preferredStrategy === "pseudoelements",
    }),
  );
};

const addSizeUtilities = ({ matchUtilities, theme }) => {
  ["width", "height"].forEach((dimension) => {
    matchUtilities(
      {
        [`scrollbar-${dimension[0]}`]: (value) => ({
          [`--scrollbar-${dimension}`]: value,
        }),
      },
      {
        values: theme(dimension),
      },
    );
  });
};

module.exports = {
  addBaseStyles,
  addBaseSizeUtilities,
  addColorUtilities,
  addRoundedUtilities,
  addSizeUtilities,
};
