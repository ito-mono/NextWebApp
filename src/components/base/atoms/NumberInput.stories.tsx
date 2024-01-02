import { Meta, StoryObj } from '@storybook/react';
import { NumberInput, NumberInputProps } from './NumberInput';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'NumberInput',
  component: NumberInput,
};
export default meta;

// Storyの定義
type Story = StoryObj<NumberInputProps>;

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
    width: '96',
    size: 'lg',
  },
};
