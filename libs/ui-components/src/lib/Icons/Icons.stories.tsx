import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WelcomeIcon, PostsIcon, LocationIcon, EmailIcon, CompanyIcon, CloseIcon, MenuIcon } from '.';

const IconsWrapper = () => {
	return (
		<div className="flex flex-wrap">
			<LocationIcon />
			<EmailIcon />
			<CompanyIcon />
			<CloseIcon />
			<MenuIcon />
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
