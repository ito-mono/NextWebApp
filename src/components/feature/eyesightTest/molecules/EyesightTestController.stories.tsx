import { Meta, StoryObj } from '@storybook/react';

import { EyesightTestController, EyesightTestControllerProps } from '.';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'EyesightTest/EyesightTestController',
  component: EyesightTestController,
};
export default meta;

// Storyの定義
type Story = StoryObj<EyesightTestControllerProps>;

export const Basic: Story = {
  args: {},
  render: function Render({ ...args }) {
    return <EyesightTestController {...args}></EyesightTestController>;
  },
};
