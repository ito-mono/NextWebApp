import { Meta, StoryObj } from '@storybook/react';
import { WindowSizeInputForm, WindowSizeInputFormProps } from './WindowSizeInputForm';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'WindowSizeInputForm',
  component: WindowSizeInputForm,
};
export default meta;

// Storyの定義
type Story = StoryObj<WindowSizeInputFormProps>;

export const Basic: Story = {};
