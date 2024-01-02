import { Meta, StoryObj } from '@storybook/react';
import Link, { LinkProps } from './Link';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'Link',
  component: Link,
};
export default meta;

// Storyの定義
type Story = StoryObj<LinkProps>;

export const Basic: Story = {
  args: {
    children: 'Link',
    href: '',
  },
};
