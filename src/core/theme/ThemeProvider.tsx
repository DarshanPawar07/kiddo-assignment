import {
ReactNode,
useMemo,
useState,
} from "react";

import type { Theme } from "@/types/theme.types";

import {
ThemeContext,
defaultTheme,
} from "./ThemeContext";

interface ThemeProviderProps {
children: ReactNode;
}

export function ThemeProvider({
children,
}: ThemeProviderProps) {
const [theme, setTheme] =
useState<Theme>(defaultTheme);

const value = useMemo(
() => ({
theme,
setTheme,
}),
[theme]
);

return (
<ThemeContext.Provider value={value}>
{children}
</ThemeContext.Provider>
);
}
