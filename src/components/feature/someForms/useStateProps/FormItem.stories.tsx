import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { FormItem, FormItemProps } from './FormItem';

import { NumberInputProps, TextInputProps } from '.';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'SomeForms/useStateProps/FormItem',
  component: FormItem,
};
export default meta;

// Storyの定義
type Story = StoryObj<FormItemProps>;

export const Basic: Story = {};

// export const String: Story = {
//   args: { label: 'label' },
//   render: function Render({ ...args }) {
//     const [value, setValue] = useState('value');
//     const inputProps: TextInputProps = {
//       value,
//       setValue,
//     };
//     return <FormItem {...args} inputProps={inputProps}></FormItem>;
//   },
// };

// export const Number: Story = {
//   args: { label: 'label' },
//   render: function Render({ ...args }) {
//     const [value, setValue] = useState(0);
//     const inputProps: NumberInputProps = {
//       value,
//       setValue,
//     };
//     return <FormItem {...args} inputProps={inputProps}></FormItem>;
//   },
// };
