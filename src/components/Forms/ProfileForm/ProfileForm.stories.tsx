import type { Meta, StoryObj } from '@storybook/react';
import { ProfileForm } from './ProfileForm';

const meta: Meta<typeof ProfileForm> = {
  title: 'ProfileForm',
  component: ProfileForm,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof ProfileForm>;

export const LayoutCommon: Story = {
  args: {},
};
