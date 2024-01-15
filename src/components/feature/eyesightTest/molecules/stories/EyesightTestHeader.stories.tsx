import { Meta, StoryObj } from '@storybook/react';

import { EyesightTestHeader, EyesightTestHeaderProps } from '..';

import { useMonitor } from '@/components/Utility/Monitor';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'EyesightTest/EyesightTestHeader',
  component: EyesightTestHeader,
};
export default meta;

// Storyの定義
type Story = StoryObj<EyesightTestHeaderProps>;

export const Basic: Story = {
  args: {},
  render: function Render({ ...args }) {
    args.useMonitorReturn = useMonitor();
    return <EyesightTestHeader {...args}></EyesightTestHeader>;
  },
};
