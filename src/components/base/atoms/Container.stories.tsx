import { Meta, StoryObj } from '@storybook/react';

import { Container, ContainerProps } from './Container';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'Element/Container',
  component: Container,
};
export default meta;

// Storyの定義
type Story = StoryObj<ContainerProps>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <div>div1</div>
        <div>div2</div>
      </>
    ),
  },
};

export const Flex: Story = {
  args: {
    children: (
      <>
        <div>div1</div>
        <div>div2</div>
      </>
    ),
    isFlex: true,
  },
};
