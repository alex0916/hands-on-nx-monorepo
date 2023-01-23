import { DarkModeIcon, LightModeIcon } from '@nx-monorepo/ui-components';
import { useThemeContext } from '../../contexts';

export const Theme = () => {
	const { theme, setTheme } = useThemeContext();

	return (
		<button
			className="flex items-center"
			onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
			role="button"
		>
			{theme === 'dark' ? (
				<LightModeIcon className="text-yellow-300 h-6 w-6" />
			) : (
				<DarkModeIcon className="text-slate-900 h-6 w-6" />
			)}
		</button>
	);
};
