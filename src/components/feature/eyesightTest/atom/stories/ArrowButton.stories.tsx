import { Meta, StoryObj } from '@storybook/react';

import { ArrowButton, ArrowButtonProps } from '../ArrowButton';

import { useMonitor } from '@/components/Utility/Monitor';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'EyesightTest/ArrowButton',
  component: ArrowButton,
};
export default meta;

// Storyの定義
type Story = StoryObj<ArrowButtonProps>;

export const Up: Story = {
  args: {
    direction: 'up',
  },
};

export const Right: Story = {
  args: {
    direction: 'right',
  },
};
