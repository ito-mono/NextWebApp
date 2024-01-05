import { Meta, StoryObj } from '@storybook/react';

import { Label, LabelProps } from './Label';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'Label',
  component: Label,
};
export default meta;

// Storyの定義
type Story = StoryObj<LabelProps>;

export const Basic: Story = {
  args: {
    children: 'Label',
  },
};
