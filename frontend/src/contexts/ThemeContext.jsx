import { createContext, useState } from "react";

export const ThemeContext = createContext();
export default function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(prev => {
            if(prev === 'dark') return 'light'
            return 'dark'
        })
    }
    return <ThemeContext.Provider value={{
        theme, toggleTheme
    }}>
        {children}
    </ThemeContext.Provider>
}
