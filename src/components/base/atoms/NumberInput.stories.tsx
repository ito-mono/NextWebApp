import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { NumberInput, NumberInputProps } from './NumberInput';

import { Label } from '@/components/base';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'NumberInput',
  component: NumberInput,
};
export default meta;

// Storyの定義
type Story = StoryObj<NumberInputProps>;

export const Basic: Story = {
  args: {},
  render: function Comp({ ...args }) {
    const [value, setValue] = useState(0);
    return <NumberInput {...args} value={value} setValue={setValue}></NumberInput>;
  },
};

export const MinAndMax: Story = {
  args: {
    min: 100,
    max: 999,
  },
  render: function Comp({ ...args }) {
    const [value, setValue] = useState(0);
    return <NumberInput {...args} value={value} setValue={setValue}></NumberInput>;
  },
};

export const WithLabel: Story = {
  args: {},
  render: function Comp({ ...args }) {
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
  render: function Comp({ ...args }) {
    const [value, setValue] = useState(0);
    return <NumberInput {...args} value={value} setValue={setValue}></NumberInput>;
  },
};

export const Left: Story = {
  args: {
    width: '48',
    align: 'left',
  },
  render: function Comp({ ...args }) {
    const [value, setValue] = useState(0);
    return <NumberInput {...args} value={value} setValue={setValue}></NumberInput>;
  },
};

export const Center: Story = {
  args: {
    width: '48',
    align: 'center',
  },
  render: function Comp({ ...args }) {
    const [value, setValue] = useState(0);
    return <NumberInput {...args} value={value} setValue={setValue}></NumberInput>;
  },
};

export const Right: Story = {
  args: {
    width: '48',
    align: 'right',
  },
  render: function Comp({ ...args }) {
    const [value, setValue] = useState(0);
    return <NumberInput {...args} value={value} setValue={setValue}></NumberInput>;
  },
};

export const Full: Story = {
  args: {
    width: 'full',
  },
  render: function Comp({ ...args }) {
    const [value, setValue] = useState(0);
    return <NumberInput {...args} value={value} setValue={setValue}></NumberInput>;
  },
};

export const Half: Story = {
  args: {
    width: '1/2',
  },
  render: function Comp({ ...args }) {
    const [value, setValue] = useState(0);
    return <NumberInput {...args} value={value} setValue={setValue}></NumberInput>;
  },
};
