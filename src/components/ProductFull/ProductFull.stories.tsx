import type { Meta, StoryObj } from '@storybook/react';
import { ProductFull } from './ProductFull';

const meta: Meta<typeof ProductFull> = {
  title: 'ProductFull',
  component: ProductFull,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof ProductFull>;

export const ProductFullCommon: Story = {
  args: {},
};
