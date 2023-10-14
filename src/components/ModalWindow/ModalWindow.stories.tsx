import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ModalWindow } from './ModalWindow';

const meta: Meta<typeof ModalWindow> = {
  title: 'Modal',
  component: ModalWindow,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isModalVisible: {
      type: 'boolean',
      description: 'Visibility of the component',
      control: { type: 'boolean' },
    },
    headerText: {
      type: 'string',
      description: 'Header text',
      name: 'Header text',
    },
  },
  args: {
    isModalVisible: false,
    headerText: '',
  },
};

export default meta;

type Story = StoryObj<typeof ModalWindow>;

export const ModalCommon: Story = {
  args: {
    isModalVisible: true,
  },
};

export const ModalWithHeader: Story = {
  args: {
    isModalVisible: true,
    headerText: 'Common Header Text',
  },
};

export const ModalWithChildren: Story = {
  args: {
    isModalVisible: true,
    children: <div>ChildData</div>,
  },
};
