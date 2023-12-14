import type { Meta, StoryObj } from '@storybook/react';
import { ProductForm } from './ProductForm';

const meta: Meta<typeof ProductForm> = {
  title: 'ProductForm',
  component: ProductForm,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof ProductForm>;

export const ProductFormCommon: Story = {
  args: {},
};
