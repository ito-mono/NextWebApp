import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { NumberInput, NumberInputProps } from './NumberInput';

import { Label } from '@/components/base';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'Element/Input/NumberInput',
  component: NumberInput,
};
export default meta;

// Storyの定義
type Story = StoryObj<NumberInputProps>;

// Hook を使う場合のRender関数
function Render({ ...args }) {
  const [value, setValue] = useState(0);
  return <NumberInput {...args} value={value} setValue={setValue}></NumberInput>;
}

// Stories
export const Basic: Story = {
  args: {},
  render: Render,
};

export const MinAndMax: Story = {
  render: Render,
};

export const WithLabel: Story = {
  args: {},
  render: function RenderWithLabel({ ...args }) {
    const [value, setValue] = useState(0);
    return (
      <>
        <Label>label</Label>
        <NumberInput {...args} value={value} setValue={setValue}></NumberInput>
      </>
    );
  },
};

export const Large: Story = {
  args: {
    width: '96',
    size: 'lg',
  },
  render: Render,
};

export const Left: Story = {
  args: {
    width: '48',
    align: 'left',
  },
  render: Render,
};

export const Center: Story = {
  args: {
    width: '48',
    align: 'center',
  },
  render: Render,
};

export const Right: Story = {
  args: {
    width: '48',
    align: 'right',
  },
  render: Render,
};

export const Full: Story = {
  args: {
    width: 'full',
  },
  render: Render,
};

export const Half: Story = {
  args: {
    width: '1/2',
  },
  render: Render,
};
