import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

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
  args: {},
};
