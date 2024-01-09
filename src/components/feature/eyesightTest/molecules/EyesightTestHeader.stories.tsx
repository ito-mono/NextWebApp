import { Meta, StoryObj } from '@storybook/react';

import { EyesightTestHeader } from '.';

import { useMonitor } from '@/components/Utility/Monitor';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'EyesightTest/EyesightTestHeader',
  component: EyesightTestHeader,
};
export default meta;

// Storyの定義
type Story = StoryObj;

export const Basic: Story = {
  args: {},
  render: function Render({ ...args }) {
    const monitor = useMonitor({});
    return <EyesightTestHeader monitor={monitor} {...args}></EyesightTestHeader>;
  },
};
