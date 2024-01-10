import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { NumberInput, NumberInputProps } from './NumberInput';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'SomeForms/useStateProps/NumberInput',
  component: NumberInput,
};
export default meta;

// Storyの定義
type Story = StoryObj<NumberInputProps>;

// Hook を使う場合のRender関数
function Render({ ...args }: NumberInputProps) {
  const [value, setValue] = useState(0);
  args = { ...args, value, setValue };

  return <NumberInput {...args}></NumberInput>;
}

// Stories
export const Basic: Story = {
  args: {},
  render: Render,
};
