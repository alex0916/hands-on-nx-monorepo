import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../Button/Button';

import { Card } from './Card';

export default {
	title: 'Card',
	component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ children, ...args }) => (
	<Card {...args}>
		<div className="flex flex-col">
			<>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.
			</>
			<Button className="mt-6 w-32">
				Action
			</Button>
		</div>
	</Card>
);

export const Default = Template.bind({});
Default.args = {
	header: 'Title',
};
