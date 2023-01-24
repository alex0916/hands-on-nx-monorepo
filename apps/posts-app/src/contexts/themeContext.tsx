import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextState {
	theme: Theme;
	setDarkTheme: () => void;
	setLightTheme: () => void;
}

const ThemeContext = createContext<ThemeContextState>({} as ThemeContextState);

// @TODO support system preference and manual selection
export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
	const [theme, setTheme] = useState<Theme>('dark');

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(theme === 'dark' ? 'light' : 'dark');
		root.classList.add(theme);
	}, [theme]);

	const contextValue = useMemo(
		() => ({
			theme,
			setDarkTheme: () => setTheme('dark'),
			setLightTheme: () => setTheme('light'),
		}),
		[theme]
	);

	return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
