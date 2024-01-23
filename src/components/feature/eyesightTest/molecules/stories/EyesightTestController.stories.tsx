import { Meta, StoryObj } from '@storybook/react';

import { EyesightTestController, EyesightTestControllerProps } from '..';

import { useMonitor } from '@/components/Utility/Monitor';

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
    args.monitor = useMonitor().monitor;
    return <EyesightTestController {...args}></EyesightTestController>;
  },
};
