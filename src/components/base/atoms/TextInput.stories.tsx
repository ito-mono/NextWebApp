import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { TextInput, TextInputProps } from './TextInput';

import { Label } from '@/components/base';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'TextInput',
  component: TextInput,
};
export default meta;

// Storyの定義
type Story = StoryObj<TextInputProps>;

export const Basic: Story = {
  args: {},
  render: function Comp({ ...args }) {
    const [value, setValue] = useState('value');
    return <TextInput {...args} value={value} setValue={setValue}></TextInput>;
  },
};

export const WithLabel: Story = {
  args: {},
  render: function Comp({ ...args }) {
    const [value, setValue] = useState('value');
    return (
      <>
        <Label>label</Label>
        <TextInput {...args} value={value} setValue={setValue}></TextInput>
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
    const [value, setValue] = useState('value');
    return <TextInput {...args} value={value} setValue={setValue}></TextInput>;
  },
};

export const Left: Story = {
  args: {
    width: '48',
    align: 'left',
  },
  render: function Comp({ ...args }) {
    const [value, setValue] = useState('value');
    return <TextInput {...args} value={value} setValue={setValue}></TextInput>;
  },
};

export const Center: Story = {
  args: {
    width: '48',
    align: 'center',
  },
  render: function Comp({ ...args }) {
    const [value, setValue] = useState('value');
    return <TextInput {...args} value={value} setValue={setValue}></TextInput>;
  },
};

export const Right: Story = {
  args: {
    width: '48',
    align: 'right',
  },
  render: function Comp({ ...args }) {
    const [value, setValue] = useState('value');
    return <TextInput {...args} value={value} setValue={setValue}></TextInput>;
  },
};

export const Full: Story = {
  args: {
    width: 'full',
  },
  render: function Comp({ ...args }) {
    const [value, setValue] = useState('value');
    return <TextInput {...args} value={value} setValue={setValue}></TextInput>;
  },
};

export const Half: Story = {
  args: {
    width: '1/2',
  },
  render: function Comp({ ...args }) {
    const [value, setValue] = useState('value');
    return <TextInput {...args} value={value} setValue={setValue}></TextInput>;
  },
};
