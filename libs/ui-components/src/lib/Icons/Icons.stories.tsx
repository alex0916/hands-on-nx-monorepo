import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WelcomeIcon, PostsIcon } from './';

const IconsWrapper = () => {
	return (
		<div className="flex">
			<WelcomeIcon />
			<PostsIcon />
		</div>
	);
};

export default {
	title: 'Icons',
	component: IconsWrapper,
} as ComponentMeta<typeof IconsWrapper>;

const Template: ComponentStory<typeof IconsWrapper> = () => <IconsWrapper />;

export const Default = Template.bind({});
