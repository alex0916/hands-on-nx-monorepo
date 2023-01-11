import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Navbar } from './Navbar';

export default {
	title: 'Navbar',
	component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = ({ ...args }) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
	options: [<div>Post</div>, <>Comments</>],
	logo: <div className="text-xl font-bold">Logo</div>,
    className: 'bg-teal-600 text-white shadow'
};
