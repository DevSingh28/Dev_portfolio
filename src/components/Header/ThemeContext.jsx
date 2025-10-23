// import React, { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext();

// const THEMES = [
//   {
//     id: "ocean",
//     name: "Ocean",
//     colors: {
//       primary: "#0077B6",
//       secondary: "#00B4D8",
//       accent: "#90E0EF",
//       background: "#F0F8FF",
//       text: "#023E8A",
//       hover: "#0096C7",
//     },
//     blobs: {
//       blob1: "rgba(0,150,199,0.14)",
//       blob2: "rgba(144,224,239,0.06)",
//     },
//   },
//   {
//     id: "sunset",
//     name: "Sunset",
//     colors: {
//       primary: "#FF6B6B",
//       secondary: "#FFD93D",
//       accent: "#FF8C42",
//       background: "#FFF7F0",
//       text: "#2B2B2B",
//       hover: "#E85D04",
//     },
//     blobs: {
//       blob1: "rgba(255,107,107,0.14)",
//       blob2: "rgba(255,165,0,0.06)",
//     },
//   },
//   {
//     id: "forest",
//     name: "Forest",
//     colors: {
//       primary: "#2D6A4F",
//       secondary: "#52B788",
//       accent: "#95D5B2",
//       background: "#F6FFF9",
//       text: "#1B4332",
//       hover: "#40916C",
//     },
//     blobs: {
//       blob1: "rgba(45,106,79,0.12)",
//       blob2: "rgba(82,183,136,0.05)",
//     },
//   },
//   {
//     id: "lavender",
//     name: "Lavender",
//     colors: {
//       primary: "#7B2CBF",
//       secondary: "#C77DFF",
//       accent: "#E0AAFF",
//       background: "#FAF5FF",
//       text: "#2B0548",
//       hover: "#9D4EDD",
//     },
//     blobs: {
//       blob1: "rgba(155,89,182,0.12)",
//       blob2: "rgba(231,203,255,0.05)",
//     },
//   },
//   {
//     id: "coral",
//     name: "Coral",
//     colors: {
//       primary: "#FF6F61",
//       secondary: "#FFB4A2",
//       accent: "#FFE5D9",
//       background: "#FFF9F7",
//       text: "#4A2C2A",
//       hover: "#E56B6F",
//     },
//     blobs: {
//       blob1: "rgba(255,111,97,0.14)",
//       blob2: "rgba(255,180,162,0.05)",
//     },
//   },
//   {
//     id: "aurora",
//     name: "Aurora",
//     colors: {
//       primary: "#06B6D4",
//       secondary: "#7C3AED",
//       accent: "#60A5FA",
//       background: "#F8FBFF",
//       text: "#0F1724",
//       hover: "#0891B2",
//     },
//     blobs: {
//       blob1: "rgba(6,182,212,0.14)",
//       blob2: "rgba(124,58,237,0.05)",
//     },
//   },
//   {
//     id: "noir",
//     name: "Noir",
//     colors: {
//       primary: "#3B82F6",
//       secondary: "#0B1220",
//       accent: "#60A5FA",
//       background: "#0B0F16",
//       text: "#E6EEF8",
//       hover: "#60A5FA",
//     },
//     blobs: {
//       blob1: "rgba(59,130,246,0.10)",
//       blob2: "rgba(11,18,32,0.06)",
//     },
//   },
// ];

// function hexToRgb(hex) {
//   const h = hex.replace("#", "");
//   const bigint = parseInt(
//     h.length === 3
//       ? h
//           .split("")
//           .map((c) => c + c)
//           .join("")
//       : h,
//     16
//   );
//   const r = (bigint >> 16) & 255;
//   const g = (bigint >> 8) & 255;
//   const b = bigint & 255;
//   return `${r}, ${g}, ${b}`;
// }

// function applyThemeVars(theme) {
//   const root = document.documentElement;
//   root.style.setProperty("--color-primary", theme.colors.primary);
//   root.style.setProperty("--color-secondary", theme.colors.secondary);
//   root.style.setProperty("--color-accent", theme.colors.accent);
//   root.style.setProperty("--color-background", theme.colors.background);
//   root.style.setProperty("--color-text", theme.colors.text);
//   root.style.setProperty("--color-hover", theme.colors.hover);
//   root.style.setProperty("--blob-1", theme.blobs.blob1);
//   root.style.setProperty("--blob-2", theme.blobs.blob2);
//   root.style.setProperty("--color-primary-rgb", hexToRgb(theme.colors.primary));
//   root.style.setProperty(
//     "--page-background",
//     `radial-gradient(700px 520px at 6% 20%, ${theme.blobs.blob1}, transparent 20%), radial-gradient(520px 360px at 92% 24%, ${theme.blobs.blob2}, transparent 18%), linear-gradient(180deg, ${theme.colors.background} 0%, ${theme.colors.background} 60%)`
//   );
//   // subtle shadow color tuned to primary
//   root.style.setProperty(
//     "--elev-shadow",
//     `rgba(${hexToRgb(theme.colors.primary)}, 0.08)`
//   );
// }

// export function ThemeProvider({ children }) {
//   const [current, setCurrent] = useState(() => {
//     try {
//       const saved = localStorage.getItem("portfolio-theme");
//       return saved && THEMES.find((t) => t.id === saved) ? saved : "ocean";
//     } catch {
//       return "ocean";
//     }
//   });

//   useEffect(() => {
//     const t = THEMES.find((x) => x.id === current) || THEMES[0];
//     applyThemeVars(t);
//     try {
//       localStorage.setItem("portfolio-theme", current);
//     } catch {}
//   }, [current]);

//   return (
//     <ThemeContext.Provider
//       value={{ themes: THEMES, currentTheme: current, changeTheme: setCurrent }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const ctx = useContext(ThemeContext);
//   if (!ctx) throw new Error("useTheme must be inside ThemeProvider");
//   return ctx;
// }

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const THEMES = [
  {
    id: "arcticwave",
    name: "Arctic Wave",
    colors: {
      primary: "#00C9FF",
      secondary: "#92FE9D",
      accent: "#B8FFF2",
      background: "#F9FFFD",
      text: "#002B36",
      hover: "#00A3D4",
    },
    blobs: {
      blob1: "rgba(0,201,255,0.14)",
      blob2: "rgba(146,254,157,0.06)",
    },
  },
  {
    id: "mocha",
    name: "Mocha",
    colors: {
      primary: "#B79891",
      secondary: "#94716B",
      accent: "#D1BAB3",
      background: "#FAF6F4",
      text: "#2E1F1D",
      hover: "#A57E77",
    },
    blobs: {
      blob1: "rgba(183,152,145,0.12)",
      blob2: "rgba(148,113,107,0.06)",
    },
  },
  {
    id: "midnight",
    name: "Midnight",
    colors: {
      primary: "#00C4B4",
      secondary: "#243B55",
      accent: "#43607B",
      background: "#0E141F",
      text: "#E0E6ED",
      hover: "#2D4564",
    },
    blobs: {
      blob1: "rgba(36,59,85,0.10)",
      blob2: "rgba(20,30,48,0.05)",
    },
  },
  {
    id: "aurorasky",
    name: "Aurora Sky",
    colors: {
      primary: "#4568DC",
      secondary: "#B06AB3",
      accent: "#D2A7E1",
      background: "#F7F6FF",
      text: "#191B2A",
      hover: "#6B4DDC",
    },
    blobs: {
      blob1: "rgba(69,104,220,0.12)",
      blob2: "rgba(176,106,179,0.06)",
    },
  },
  {
    id: "copperdusk",
    name: "Copper Dusk",
    colors: {
      primary: "#D1913C",
      secondary: "#FFD194",
      accent: "#FFE9C4",
      background: "#FFFCF7",
      text: "#3C2B17",
      hover: "#C6812D",
    },
    blobs: {
      blob1: "rgba(209,145,60,0.14)",
      blob2: "rgba(255,209,148,0.06)",
    },
  },
  {
    id: "crimsonrose",
    name: "Crimson Rose",
    colors: {
      primary: "#CB356B",
      secondary: "#BD3F32",
      accent: "#F49D94",
      background: "#FFF8F8",
      text: "#2A0E0B",
      hover: "#D23C49",
    },
    blobs: {
      blob1: "rgba(203,53,107,0.14)",
      blob2: "rgba(189,63,50,0.05)",
    },
  },
  {
    id: "royalflame",
    name: "Royal Flame",
    colors: {
      primary: "#FF512F",
      secondary: "#DD2476",
      accent: "#FF7E79",
      background: "#FFF7F8",
      text: "#2B0E12",
      hover: "#E23C50",
    },
    blobs: {
      blob1: "rgba(255,81,47,0.14)",
      blob2: "rgba(221,36,118,0.06)",
    },
  },
  {
    id: "celestial",
    name: "Celestial",
    colors: {
      primary: "#283E51",
      secondary: "#485563",
      accent: "#7A90A0",
      background: "#F5F8FA",
      text: "#1A252E",
      hover: "#364B5E",
    },
    blobs: {
      blob1: "rgba(40,62,81,0.14)",
      blob2: "rgba(72,85,99,0.06)",
    },
  },
  {
    id: "jadefusion",
    name: "Jade Fusion",
    colors: {
      primary: "#43C6AC",
      secondary: "#191654",
      accent: "#7BE4D9",
      background: "#F2FFFB",
      text: "#0C1A19",
      hover: "#36A693",
    },
    blobs: {
      blob1: "rgba(67,198,172,0.14)",
      blob2: "rgba(25,22,84,0.05)",
    },
  },
  {
    id: "goldnova",
    name: "Gold Nova",
    colors: {
      primary: "#FDC830",
      secondary: "#F37335",
      accent: "#FFD580",
      background: "#FFFBF3",
      text: "#2C1C0A",
      hover: "#E37C24",
    },
    blobs: {
      blob1: "rgba(253,200,48,0.14)",
      blob2: "rgba(243,115,53,0.06)",
    },
  },
];

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const bigint = parseInt(
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h,
    16
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

function applyThemeVars(theme) {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", theme.colors.primary);
  root.style.setProperty("--color-secondary", theme.colors.secondary);
  root.style.setProperty("--color-accent", theme.colors.accent);
  root.style.setProperty("--color-background", theme.colors.background);
  root.style.setProperty("--color-text", theme.colors.text);
  root.style.setProperty("--color-hover", theme.colors.hover);
  root.style.setProperty("--blob-1", theme.blobs.blob1);
  root.style.setProperty("--blob-2", theme.blobs.blob2);
  root.style.setProperty("--color-primary-rgb", hexToRgb(theme.colors.primary));
  root.style.setProperty(
    "--page-background",
    `radial-gradient(700px 520px at 6% 20%, ${theme.blobs.blob1}, transparent 20%), radial-gradient(520px 360px at 92% 24%, ${theme.blobs.blob2}, transparent 18%), linear-gradient(180deg, ${theme.colors.background} 0%, ${theme.colors.background} 60%)`
  );
  root.style.setProperty(
    "--elev-shadow",
    `rgba(${hexToRgb(theme.colors.primary)}, 0.08)`
  );
}

export function ThemeProvider({ children }) {
  const [current, setCurrent] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      return saved && THEMES.find((t) => t.id === saved) ? saved : "arcticwave";
    } catch {
      return "arcticwave";
    }
  });

  useEffect(() => {
    const t = THEMES.find((x) => x.id === current) || THEMES[0];
    applyThemeVars(t);
    try {
      localStorage.setItem("portfolio-theme", current);
    } catch {}
  }, [current]);

  return (
    <ThemeContext.Provider
      value={{ themes: THEMES, currentTheme: current, changeTheme: setCurrent }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be inside ThemeProvider");
  return ctx;
}
