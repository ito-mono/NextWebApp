import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { FormItem, FormItemProps } from './FormItem';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'Element/Form/FormItem',
  component: FormItem,
};
export default meta;

// Storyの定義
type Story = StoryObj<FormItemProps>;

export const String: Story = {
  args: { label: 'label' },
  render: function Render({ ...args }) {
    [args.value, args.setValue] = useState('value');
    return <FormItem {...args}></FormItem>;
  },
};

export const Number: Story = {
  args: { label: 'label' },
  render: function Render({ ...args }) {
    [args.value, args.setValue] = useState(0);
    return <FormItem {...args}></FormItem>;
  },
};
