import { createContext, useContext } from "react";

// we can put default value as well in this way of declaration of syntax
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// We can even make some custom hooks here that people often makes
export default function useTheme() {
    return useContext(ThemeContext)
}