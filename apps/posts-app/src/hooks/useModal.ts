import { useState } from 'react';

export const useModal = () => {
	const [isDisplayed, setIsDisplayed] = useState(false);

	const hideModal = () => setIsDisplayed(false);
	const showModal = () => setIsDisplayed(true);

	return {
		isDisplayed,
		hideModal,
		showModal,
	};
};
