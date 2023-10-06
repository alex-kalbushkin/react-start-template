import type { Meta, StoryObj } from '@storybook/react';
import { CartProduct } from './CartProduct';

const meta: Meta<typeof CartProduct> = {
  title: 'CartProduct',
  component: CartProduct,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
      description: 'Disable delete button',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: false } },
    },
  },
  args: {
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof CartProduct>;

export const CartProductCommon: Story = {
  args: {
    disabled: true,
  },
};
