import type { Meta, StoryObj } from '@storybook/react';
import { ModalControl } from './ModalControl';

const meta: Meta<typeof ModalControl> = {
  title: 'ModalControl',
  component: ModalControl,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof ModalControl>;

export const ModalControlCommon: Story = {
  args: {},
};
