import { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'EyesightTest/Header',
  component: Header,
};
export default meta;

// Storyの定義
type Story = StoryObj;

export const Basic: Story = {};
