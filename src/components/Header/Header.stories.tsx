import type { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderTheme } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    theme: {
      description: 'Header theme type',
      control: { type: 'radio', options: [HeaderTheme.Common, HeaderTheme.Dark] },
      table: { defaultValue: { summary: HeaderTheme.Common } },
    },
  },
  args: { theme: HeaderTheme.Common },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const HeaderCommon: Story = {
  args: { theme: HeaderTheme.Common },
};
