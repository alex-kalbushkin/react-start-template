import type { Meta, StoryObj } from '@storybook/react';
import { AuthForm } from './AuthForm';

const meta: Meta<typeof AuthForm> = {
  title: 'AuthForm',
  component: AuthForm,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof AuthForm>;

export const LayoutCommon: Story = {
  args: {},
};
