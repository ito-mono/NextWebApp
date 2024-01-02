import { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from './Input';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'Input',
  component: Input,
};
export default meta;

// Storyの定義
type Story = StoryObj<InputProps>;

export const Basic: Story = {
  args: {
    value: 'value',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'label',
    value: 'value',
  },
};

export const AlignCenter: Story = {
  args: {
    label: 'label',
    value: 'value',
    align: 'center',
  },
};

export const Large: Story = {
  args: {
    label: 'label',
    value: 'value',
    width: 20,
    size: 'lg',
  },
};
