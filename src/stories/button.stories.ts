import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button/Button';

const meta = {
	title: 'Example/Button',
	component: Button,
	tags: ['docsPage'],
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		view: {
			control: { type: 'select' },
		},
		size: {
			control: {
				type: 'select',
			},
		},
		rounded: {
			control: {
				type: 'boolean',
			},
		},
		noXPadding: {
			control: {
				type: 'boolean',
			},
		},
	},
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	args: {
		children: 'Button',
		view: 'primary',
		size: 'm',
		rounded: false,
		noXPadding: false,
	},
};
