import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'Button',
  component: Button,
};
export default meta;

// Storyの定義
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};
export const Inverse: Story = {
  args: {
    children: 'Inverse',
    variant: 'inverse',
    size: 'lg',
  },
};
export const Danger: Story = {
  args: {
    children: 'Danger',
    variant: 'danger',
    size: 'lg',
  },
};
