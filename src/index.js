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
      textWrap: "nowrap",
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
      borderRadius: "9999px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "var(--color-neutral-900)", // standard dark border
      padding: "0.75rem 1.5rem", // Standard size
      boxShadow: "4px 4px 0px var(--color-neutral-900)",

      "&:hover": {
        transform: "translate(-2px, -2px)",
        boxShadow: "6px 6px 0px var(--color-neutral-900)",
      },
      "&:active": {
        transform: "translate(2px, 2px)",
        boxShadow: "2px 2px 0px var(--color-neutral-900)",
      },
      "&:disabled": {
        opacity: "0.6",
        cursor: "not-allowed",
        transform: "none",
        boxShadow: "none",
      },
    },
    ".btn-sm": {
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
    },
    ".btn-lg": {
      padding: "1rem 2rem",
      fontSize: "1.25rem",
    },
    ".btn-block": {
      width: "100%",
      display: "flex",
    },
    ".btn-primary": {
      backgroundColor: "var(--color-primary-600)",
      color: "#ffffff",
      borderColor: "var(--color-neutral-900)",
      "&:hover": {
        backgroundColor: "var(--color-primary-700)",
      },
    },
    ".btn-secondary": {
      backgroundColor: "var(--color-secondary-300)",
      color: "var(--color-neutral-900)",
      borderColor: "var(--color-neutral-900)",
      "&:hover": {
        backgroundColor: "var(--color-secondary-400)",
      },
    },
    ".btn-outline": {
      backgroundColor: "transparent",
      color: "var(--color-neutral-900)",
      borderColor: "var(--color-neutral-900)",
      "&:hover": {
        backgroundColor: "var(--color-neutral-50)",
      },
    },
    // New White Variant commonly used
    ".btn-white": {
      backgroundColor: "#ffffff",
      color: "var(--color-neutral-900)",
      borderColor: "var(--color-neutral-900)",
      "&:hover": {
        backgroundColor: "var(--color-neutral-50)",
      },
    },

    // CARDS
    ".card": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#ffffff",
      borderRadius: "1rem", // rounded-xl
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "var(--color-neutral-800)",
      padding: "1.5rem", // p-6
      boxShadow: "4px 4px 0px var(--color-neutral-800)", // shadow-hard
      overflow: "hidden", // helpful for keeping children inside
    },
    ".card-primary": {
      backgroundColor: "var(--color-primary-50)",
      borderColor: "var(--color-primary-600)", // specific border override
      boxShadow: "4px 4px 0px var(--color-neutral-800)", // shadow usually stays dark
    },
    ".card-secondary": {
      backgroundColor: "var(--color-secondary-50)",
      borderColor: "var(--color-neutral-800)",
    },
    ".card-interactive": {
      transitionProperty: "all",
      transitionDuration: "200ms",
      cursor: "pointer",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "6px 6px 0px var(--color-neutral-800)", // shadow-hard-hover equivalent
      },
    },
    // Responsive Card Behavior using Container Queries
    ".card-wrapper": {
      containerType: "inline-size",
      width: "100%",
    },
    ".card-responsive": {
      gap: "1.5rem", // gap-6
      // Default uses flex-col from .card base

      // When card is wider than 450px, switch to horizontal
      "@container (min-width: 450px)": {
        flexDirection: "row",
        alignItems: "center",

        "& > .card-image-wrapper": {
          marginBottom: "0",
          flexShrink: "0",
        },
        "& > .card-content": {
          textAlign: "left",
        },
        "& > .btn": {
          width: "auto", // reset any full width buttons if needed
        },
      },
    },
    // Card Children Helpers
    ".card-title": {
      fontFamily: "var(--font-heading)",
      fontWeight: "700",
      fontSize: "1.25rem", // text-xl
      marginBottom: "0.5rem",
      color: "var(--color-neutral-800)",
    },
    ".card-body": {
      color: "var(--color-neutral-600)",
      fontSize: "1rem",
    },
    ".input": {
      width: "100%",
      borderRadius: "0.5rem",
      borderWidth: "2px",
      borderColor: "var(--color-neutral-300)",
      backgroundColor: "#ffffff",
      paddingBlock: "0.75rem",
      paddingInline: "1rem", // pl-4 by default, override if icon present
      fontWeight: "500",
      color: "var(--color-neutral-800)",
      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      transitionProperty: "all",
      transitionDuration: "150ms",
      "&::placeholder": {
        color: "var(--color-neutral-400)",
      },
      "&:focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        borderColor: "var(--color-primary-600)",
        boxShadow: "0 0 0 4px var(--color-primary-100)",
      },
    },
    ".input-error": {
      borderColor: "rgb(239 68 68)", // red-500
      backgroundColor: "rgb(254 242 242)", // red-50
      color: "rgb(127 29 29)", // red-900
      "&:focus": {
        borderColor: "rgb(239 68 68)", // red-500
        boxShadow: "0 0 0 4px rgb(254 226 226)", // red-100
      },
    },
    ".input-success": {
      borderColor: "rgb(34 197 94)", // green-500
      backgroundColor: "rgb(240 253 244)", // green-50
      color: "rgb(20 83 45)", // green-900
      "&:focus": {
        borderColor: "rgb(34 197 94)", // green-500
        boxShadow: "0 0 0 4px rgb(220 252 231)", // green-100
      },
    },
    ".textarea": {
      width: "100%",
      borderRadius: "0.5rem",
      borderWidth: "2px",
      borderColor: "var(--color-neutral-300)",
      backgroundColor: "#ffffff",
      paddingBlock: "0.75rem",
      paddingInline: "1rem",
      fontWeight: "500",
      color: "var(--color-neutral-800)",
      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      transitionProperty: "all",
      transitionDuration: "150ms",
      resize: "none",
      "&::placeholder": {
        color: "var(--color-neutral-400)",
      },
      "&:focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        borderColor: "var(--color-primary-600)",
        boxShadow: "0 0 0 4px var(--color-primary-100)",
      },
    },
    ".select": {
      width: "100%",
      cursor: "pointer",
      appearance: "none",
      borderRadius: "0.5rem",
      borderWidth: "2px",
      borderColor: "var(--color-neutral-300)",
      backgroundColor: "#ffffff",
      paddingBlock: "0.75rem",
      paddingRight: "2.5rem",
      paddingLeft: "1rem",
      fontWeight: "500",
      color: "var(--color-neutral-800)",
      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      transitionProperty: "all",
      transitionDuration: "150ms",
      "&:focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        borderColor: "var(--color-primary-600)",
        boxShadow: "0 0 0 4px var(--color-primary-100)",
      },
    },
    ".checkbox": {
      appearance: "none",
      height: "1.5rem",
      width: "1.5rem",
      flexShrink: 0,
      cursor: "pointer",
      borderRadius: "0.25rem",
      borderWidth: "2px",
      borderColor: "var(--color-neutral-400)",
      backgroundColor: "#ffffff",
      color: "var(--color-primary-600)",
      transitionProperty: "all",
      transitionDuration: "150ms",
      "&:focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: "0 0 0 4px var(--color-primary-200)",
        borderColor: "var(--color-primary-600)",
      },
      "&:checked": {
        backgroundColor: "currentColor",
        borderColor: "currentColor",
        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`,
      },
    },
    ".radio": {
      appearance: "none",
      height: "1.25rem",
      width: "1.25rem",
      flexShrink: 0,
      cursor: "pointer",
      borderRadius: "9999px",
      borderWidth: "2px",
      borderColor: "var(--color-neutral-400)",
      color: "var(--color-primary-600)",
      backgroundColor: "#ffffff",
      transitionProperty: "all",
      transitionDuration: "150ms",
      "&:focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: "0 0 0 4px var(--color-primary-200)",
        borderColor: "var(--color-primary-600)",
      },
      "&:checked": {
        borderColor: "currentColor",
        borderWidth: "6px",
      },
    },
    ".badge": {
      display: "inline-flex",
      width: "fit-content",
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
