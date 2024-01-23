import { Meta, StoryObj } from '@storybook/react';

import { ArrowButtonsContainer, ArrowButtonsContainerProps } from '..';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'EyesightTest/ArrowButtonsContainer',
  component: ArrowButtonsContainer,
};
export default meta;

// Storyの定義
type Story = StoryObj<ArrowButtonsContainerProps>;

export const EightButtons: Story = {
  args: { showDiagonal: true },
};

export const FourButtons: Story = {
  args: { showDiagonal: false },
};
