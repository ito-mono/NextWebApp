import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputProps } from './TextInput';
import { useState } from 'react';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'TextInput',
  component: TextInput,
};
export default meta;

// Storyの定義
type Story = StoryObj<TextInputProps>;

export const Basic: Story = {
  args: {
    value: 'value',
  },
  decorators: [
    (Story) => {
      const [value, setValue] = useState('');
      return <Story args={{ value, setValue }} />;
    },
  ],
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
