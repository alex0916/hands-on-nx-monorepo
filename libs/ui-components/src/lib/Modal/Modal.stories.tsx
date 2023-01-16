import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import { Button, Modal } from '..';

export default {
	title: 'Modal',
	component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({ children, ...args }) => {
	const [isDisplayed, setIsDisplayed] = useState(false);

    const openModal = () => setIsDisplayed(true);
    const hideModal = () => setIsDisplayed(false);

	return (
		<>
			<Button onClick={openModal}>Open Modal</Button>
			<Modal
				{...args}
				isDisplayed={isDisplayed}
				hideModal={hideModal}
				header={<p className="text-2xl">Title</p>}
				footer={
					<Button variant="outlined" onClick={hideModal}>
						Close
					</Button>
				}
			>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
				into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
				release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
				software like Aldus PageMaker including versions of Lorem Ipsum
			</Modal>
		</>
	);
};

export const Default = Template.bind({});
