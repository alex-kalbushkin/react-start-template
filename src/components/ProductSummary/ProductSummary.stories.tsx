import type { Meta, StoryObj } from '@storybook/react';
import { ProductSummary } from './ProductSummary';

const meta: Meta<typeof ProductSummary> = {
  title: 'ProductSummary',
  component: ProductSummary,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof ProductSummary>;

export const ProductSummaryCommon: Story = {
  args: {},
};
