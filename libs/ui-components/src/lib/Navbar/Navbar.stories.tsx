import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Navbar } from './Navbar';

export default {
	title: 'Navbar',
	component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = ({ ...args }) => (
	<Navbar {...args} options={[<div>Post</div>, <>Comments</>]} logo={<div className="text-xl font-bold">Logo</div>} />
);

export const Default = Template.bind({});
Default.args = {
	className: 'bg-teal-600 text-white shadow',
};
