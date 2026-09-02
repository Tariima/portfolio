export type Palette = {
  id: string; // "" = default (ámbar)
  name: string;
  swatchDark: string;
  swatchLight: string;
  vibe: string;
};

export const palettes: Palette[] = [
  { id: "", name: "Ámbar (actual)", swatchDark: "#f2b233", swatchLight: "#a3650c", vibe: "cálido, industrial" },
  { id: "coral", name: "Coral", swatchDark: "#ff6b57", swatchLight: "#d9432d", vibe: "enérgico, cercano" },
  { id: "menta", name: "Menta", swatchDark: "#3ddc97", swatchLight: "#0e7a5a", vibe: "fresco, técnico" },
  { id: "lima", name: "Lima", swatchDark: "#c8f03c", swatchLight: "#5f7a00", vibe: "eléctrico, imposible de ignorar" },
  { id: "cian", name: "Cian", swatchDark: "#22d3ee", swatchLight: "#0b7285", vibe: "limpio, de producto" },
  { id: "mono", name: "Mono", swatchDark: "#ffffff", swatchLight: "#111111", vibe: "editorial, sobrio" },
  { id: "marino", name: "Marino", swatchDark: "#7b96ff", swatchLight: "#1e3a8a", vibe: "azul oscuro, serio" },
  { id: "lavanda", name: "Lavanda", swatchDark: "#b79cff", swatchLight: "#6d28d9", vibe: "violeta suave, moderno" },
  { id: "orquidea", name: "Orquídea", swatchDark: "#da8cff", swatchLight: "#8b2fc9", vibe: "violeta rosado, con carácter" },
];
