import {createContext, useContext} from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    darktheme: () =>{},
    lighttheme: () => {}
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}