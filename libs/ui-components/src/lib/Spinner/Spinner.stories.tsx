import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Spinner, SpinnerSize } from './Spinner';

export default {
	title: 'Spinner',
	component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = ({ ...args }) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
	size: SpinnerSize.Small,
};
