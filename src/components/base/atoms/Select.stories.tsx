import { Meta, StoryObj } from '@storybook/react';

import { Select, SelectProps } from './Select';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'Element/Select',
  component: Select,
};
export default meta;

// Storyの定義
type Story = StoryObj<SelectProps>;

export const Basic: Story = {
  args: { options: ['a', 'b', 'c'] },
};
