import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../../providers';
import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const LayoutCommon: Story = {
  args: {},
  render: () => (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  ),
};
