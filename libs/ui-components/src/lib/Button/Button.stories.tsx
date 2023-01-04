import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonSize } from './Button';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		size: {
			options: ButtonSize,
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ ...args }) => <Button {...args}>Title</Button>;

export const Default = Template.bind({});
Default.args = {
	size: ButtonSize.Medium,
};

