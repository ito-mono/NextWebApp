import { Meta, StoryObj } from '@storybook/react';

import { FormItemProps, NumberInputProps, TextInputProps } from '..';
import { Form, FormProps } from '..';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'SomeForms/useStateLocaly/Form',
  component: Form,
};
export default meta;

// Storyの定義
type Story = StoryObj<FormProps>;

export const Basic: Story = {
  args: {},
  render: function Render({ ...args }) {
    const strInputProps: TextInputProps = {};
    const numInputProps: NumberInputProps = { min: 100, max: 999 };

    const formItemProps: FormItemProps[] = [];
    formItemProps.push({ label: 'string', type: 'text', inputProps: strInputProps });
    formItemProps.push({ label: 'number', type: 'number', inputProps: numInputProps });
    return <Form formItemsProps={formItemProps} {...args}></Form>;
  },
};

export const Monitor: Story = {
  args: {},
  render: function Render({ ...args }) {
    const strInputProps: TextInputProps = {};
    const numInputProps: NumberInputProps = { min: 100, max: 999 };

    const formItemProps: FormItemProps[] = [];
    formItemProps.push({ label: 'string', type: 'text', inputProps: strInputProps });
    formItemProps.push({ label: 'number', type: 'number', inputProps: numInputProps });
    return <Form formItemsProps={formItemProps} {...args}></Form>;
  },
};
