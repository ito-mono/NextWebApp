/**
 * react-hook-form でフォームを作成するサンプルStory
 */

import { Meta, StoryObj } from '@storybook/react';

import { Form } from './Form';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'SomeForms/react-hook-form/Form',
  component: Form,
};
export default meta;

// Storyの定義
type Story = StoryObj;

export const Basic: Story = {};
