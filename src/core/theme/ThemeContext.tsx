import { createContext } from "react";

import type { Theme } from "@/types/theme.types";

export interface ThemeContextValue {
theme: Theme;
setTheme: (theme: Theme) => void;
}

export const defaultTheme: Theme = {
primary: "#FF9933",
background: "#FFF5E6",
secondary: "#FFD699",
text: "#1F2937",
card: "#FFFFFF",
border: "#E5E7EB",
success: "#22C55E",
warning: "#F59E0B",
borderRadius: 12,
};

export const ThemeContext =
createContext<ThemeContextValue>({
theme: defaultTheme,
setTheme: () => {},
});
