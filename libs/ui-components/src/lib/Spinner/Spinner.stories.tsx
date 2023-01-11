import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Spinner } from './Spinner';

export default {
	title: 'Spinner',
	component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = ({ ...args }) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
	size: 'medium',
	color: 'teal',
};
