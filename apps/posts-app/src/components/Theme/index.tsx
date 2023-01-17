import { DarkModeIcon, LightModeIcon } from '@nx-monorepo/ui-components';
import { useThemeContext } from '../../contexts';

export const Theme = () => {
	const { theme, setTheme } = useThemeContext();

	return theme === 'dark' ? (
		<LightModeIcon onClick={() => setTheme('light')} className="cursor-pointer text-yellow-300 h-6 w-6" />
	) : (
		<DarkModeIcon onClick={() => setTheme('dark')} className="cursor-pointer text-slate-900 h-6 w-6" />
	);
};
