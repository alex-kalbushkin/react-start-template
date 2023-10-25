import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { LocalizationProvider, ThemeProvider } from '../../providers';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Header>;

export const HeaderCommon: Story = {
  render: () => (
    <LocalizationProvider>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </LocalizationProvider>
  ),
};
