import type { Meta, StoryObj } from '@storybook/react';
import { OperationFull } from './OperationFull';

const meta: Meta<typeof OperationFull> = {
  title: 'OperationFull',
  component: OperationFull,
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
      description: 'Operation description',
      table: { defaultValue: { summary: 'Buy two Jackets for 200$' } },
      control: { type: 'text' },
    },
    title: {
      type: 'string',
      description: 'Operation title',
      table: { defaultValue: { summary: 'Buy Jackets' } },
      control: { type: 'text' },
    },
    transactionAmount: {
      type: 'number',
      description: 'Transaction amount',
      table: { defaultValue: { summary: 10 } },
      control: { type: 'number', min: 10, max: 100, step: 5 },
    },
    transactionDate: {
      type: 'string',
      description: 'Transaction date',
      table: { defaultValue: { summary: new Date() } },
      control: 'date',
    },
    disabled: {
      type: 'boolean',
      description: 'Disable edit operation button',
      table: { defaultValue: { summary: true } },
      control: 'boolean',
    },
  },
  args: {
    disabled: true,
  },
};

export default meta;

type Story = StoryObj<typeof OperationFull>;

export const OperationFullCommon: Story = {
  args: {
    title: 'Buy chocolate',
    description: 'Buy 1kg of chocolate',
    categoryName: 'Common category',
    transactionAmount: 10,
    transactionDate: new Date(),
  },
};
