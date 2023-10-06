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
    visible: {
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
    visible: false,
    headerText: '',
  },
};

export default meta;

type Story = StoryObj<typeof ModalWindow>;

export const ModalCommon: Story = {
  args: {
    visible: true,
  },
};

export const ModalWithHeader: Story = {
  args: {
    visible: true,
    headerText: 'Common Header Text',
  },
};

export const ModalWithChildren: Story = {
  args: {
    visible: true,
    children: <div>ChildData</div>,
  },
};
