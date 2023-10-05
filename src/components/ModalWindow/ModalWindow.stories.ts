import type { Meta, StoryObj } from '@storybook/react';
import { ModalWindow } from './ModalWindow';

const meta: Meta<typeof ModalWindow> = {
  title: 'Modal',
  component: ModalWindow,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    visible: {
      type: 'boolean',
      description: 'Visibility of the component',
      defaultValue: 'true',
      control: { type: 'boolean' },
    },
    headerText: {
      type: 'string',
      description: 'Header text',
      name: 'Header text',
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalVisible: Story = {
  args: {
    visible: true,
  },
};
