import type { Meta, StoryObj } from '@storybook/react';
import { OperationSummary } from './OperationSummary';

const meta: Meta<typeof OperationSummary> = {
  title: 'OperationSummary',
  component: OperationSummary,
  tags: ['autodocs'],
  argTypes: {
    categoryName: {
      type: 'string',
      description: 'Category name',
      table: { defaultValue: { summary: 'Common category' } },
      control: { type: 'text' },
    },
    description: {
      type: 'string',
      description: 'Operation summary description',
      table: { defaultValue: { summary: 'Buy two Jackets for 200$' } },
      control: { type: 'text' },
    },
    title: {
      type: 'string',
      description: 'Operation summary title',
      table: { defaultValue: { summary: 'Buy Jackets' } },
      control: { type: 'text' },
    },
    transactionAmount: {
      type: 'number',
      description: 'Transaction amount',
      table: { defaultValue: { summary: 10 } },
      control: { type: 'number', min: 10, max: 100, step: 5 },
    },
  },
  args: {
    categoryName: 'Common category',
    description: 'Buy two Jackets for 200$',
    title: 'Buy Jackets',
    transactionAmount: 10,
  },
};

export default meta;

type Story = StoryObj<typeof OperationSummary>;

export const OperationSummaryCommon: Story = {
  args: {
    title: 'Buy chocolate',
    description: 'Buy 1kg of chocolate',
  },
};
