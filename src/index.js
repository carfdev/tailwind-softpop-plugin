const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    ".section-container": {
      width: "100%",
      marginInline: "auto",
      paddingInline: "1.5rem",
      "@media (width >= 40rem)": {
        maxWidth: "40rem",
      },
      "@media (width >= 48rem)": {
        maxWidth: "48rem",
        paddingInline: "3rem",
      },
      "@media (width >= 64rem)": {
        maxWidth: "64rem",
      },
      "@media (width >= 80rem)": {
        maxWidth: "80rem",
      },
      "@media (width >= 96rem)": {
        maxWidth: "96rem",
      },
    },
    ".btn": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      transitionProperty: "all",
      transitionDuration: "200ms",
      cursor: "pointer",
      userSelect: "none",
      textDecoration: "none",

      fontFamily: "var(--font-heading)",
      fontWeight: "700",
      fontSize: "1.125rem",

      borderRadius: "999px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "var(--color-neutral-700)",

      boxShadow: `4px 4px 0px var(--color-neutral-700)`,
      padding: "1rem 2rem",

      "&:hover": {
        transform: "translate(-2px, -2px)",
        boxShadow: `6px 6px 0px var(--color-neutral-700)`,
      },
      "&:active": {
        transform: "translate(2px, 2px)",
        boxShadow: `2px 2px 0px var(--color-neutral-700)`,
      },
    },
    ".btn-primary": {
      backgroundColor: "var(--color-primary-400)",
      color: "#ffffff",
    },
    ".btn-secondary": {
      backgroundColor: "var(--color-secondary-300)",
      color: "var(--color-neutral-800)",
    },
    ".btn-outline": {
      backgroundColor: "transparent",
      color: "var(--color-neutral-800)",
    },
    ".card": {
      containerType: "inline-size",
      containerName: "card",

      backgroundColor: "#ffffff",
      borderWidth: "2px",
      borderColor: "var(--color-neutral-700)",
      transitionProperty: "transform",
      transitionDuration: "300ms",
      display: "flex",
      flexDirection: "column",

      borderRadius: "16px",
      boxShadow: `4px 4px 0px var(--color-neutral-700)`,
      padding: "clamp(1.5rem, 5cqw, 2.5rem)",

      "&:hover": {
        transform: "translateY(-4px)",
      },
    },
    ".card-icon": {
      color: "var(--color-primary-400)",
      marginBottom: "1rem",
      fontSize: "3rem",
      lineHeight: "1",
      "@container card (max-width: 350px)": {
        fontSize: "2.5rem",
      },
    },
    ".card-title": {
      fontWeight: "700",
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      marginBottom: "0.5rem",
      color: "var(--color-neutral-800)",
      fontFamily: "var(--font-heading)",
      "@container card (max-width: 350px)": {
        fontSize: "1.25rem",
      },
    },
    ".card.horizontal": {
      "@container card (min-width: 450px)": {
        flexDirection: "row",
        alignItems: "center",
        gap: "1.5rem",
        textAlign: "left",
      },
    },
    ".card.horizontal .card-icon": {
      "@container card (min-width: 450px)": {
        marginBottom: "0",
      },
    },
    ".badge": {
      display: "inline-flex",
      alignItems: "center",
      paddingInline: "calc(var(--spacing) * 3) /* 0.75rem = 12px */",
      paddingBlock: "calc(var(--spacing) * 1) /* 0.25rem = 4px */",
      borderRadius: "calc(infinity * 1px)",
      fontSize: "var(--text-sm) /* 0.875rem = 14px */",
      lineHeight: "var(--tw-leading, var(--text-sm--line-height))",
      fontWeight: "var(--font-weight-bold) /* 700 */",
      borderStyle: "var(--tw-border-style)",
      borderWidth: "2px",
    },
    ".badge-primary": {
      backgroundColor: "var(--color-primary-100)",
      color: "var(--color-primary-800)",
      borderColor: "var(--color-primary-800)",
    },
    ".badge-secondary": {
      backgroundColor: "var(--color-secondary-100)",
      color: "var(--color-secondary-800)",
      borderColor: "var(--color-secondary-800)",
    },
    ".badge-outline": {
      backgroundColor: "transparent",
      color: "var(--color-neutral-800)",
      borderColor: "var(--color-neutral-800)",
    },
  });
});
