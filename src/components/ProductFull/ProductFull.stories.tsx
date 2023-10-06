import type { Meta, StoryObj } from '@storybook/react';
import Chocolate from '../../assets/images/chocolate.png';
import { ProductFull } from './ProductFull';

const meta: Meta<typeof ProductFull> = {
  title: 'ProductFull',
  component: ProductFull,
  tags: ['autodocs'],
  argTypes: {
    categoryName: {
      type: 'string',
      description: 'Category name',
      table: { defaultValue: { summary: 'Food' } },
      control: { type: 'text' },
    },
    description: {
      type: 'string',
      description: 'Product description',
      table: { defaultValue: { summary: 'Best product ever made' } },
      control: { type: 'text' },
    },
    imageUrl: {
      type: 'string',
      description: 'Product image',
    },
    title: {
      type: 'string',
      description: 'Product title',
      table: { defaultValue: { summary: 'Chocolate' } },
      control: { type: 'text' },
    },
    price: {
      type: 'number',
      description: 'Product price',
      table: { defaultValue: { summary: 100 } },
      control: { type: 'number', min: 20, max: 200, step: 10 },
    },
    disabled: {
      type: 'boolean',
      description: 'Disable add to cart button',
      table: { defaultValue: { summary: true } },
      control: 'boolean',
    },
  },
  args: {
    categoryName: 'Food',
    description: 'Best product ever made',
    title: 'Chocolate',
    price: 100,
    disabled: true,
  },
};

export default meta;

type Story = StoryObj<typeof ProductFull>;

export const ProductFullCommon: Story = {
  args: {
    title: 'Dark chocolate',
    price: 50,
    imageUrl: Chocolate,
  },
};
