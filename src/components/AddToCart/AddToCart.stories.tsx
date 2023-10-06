import { Meta, StoryObj } from '@storybook/react';
import { AddToCart } from './AddToCart';

const meta: Meta<typeof AddToCart> = {
  title: 'AddToCart',
  component: AddToCart,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
      description: 'Disable  add to cart button',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: false } },
    },
    counter: {
      type: 'number',
      description: 'Product count',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
      table: { defaultValue: { summary: 1 } },
    },
  },
  args: {
    disabled: false,
    counter: 1,
  },
};

export default meta;

type Story = StoryObj<typeof AddToCart>;

export const AddToCartWithButton: Story = {
  args: {
    counter: 0,
  },
};

export const AddToCartWithButtonDisabled: Story = {
  args: {
    counter: 0,
    disabled: true,
  },
};

export const AddToCartWithCounter: Story = {
  args: {
    counter: 2,
  },
};
