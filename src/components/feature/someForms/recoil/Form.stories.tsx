import { Meta, StoryObj } from '@storybook/react';

import { Form, FormProps } from './Form';

const meta: Meta = {
  title: 'SomeForms/Recoil/Form',
  component: Form,
};
export default meta;

type Story = StoryObj<FormProps>;

export const Basic: Story = {};
