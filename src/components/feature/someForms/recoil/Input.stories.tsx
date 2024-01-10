import { Meta, StoryObj } from '@storybook/react';

import { Form } from './Form';
import { InputProps } from './Input';

const meta: Meta = {
  title: 'Utility/Recoil/Inpput',
  component: Form,
};
export default meta;

type Story = StoryObj<InputProps>;

export const Basic: Story = {};
