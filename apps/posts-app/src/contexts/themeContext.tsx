import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextState {
	theme: Theme;
	setTheme: Dispatch<SetStateAction<Theme>>;
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
			setTheme,
		}),
		[theme, setTheme]
	);

	return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
