import { Meta, StoryObj } from '@storybook/react';

import { LandoltRingImage, LandoltRingImageProps } from '../LandoltRingImage';

import { useMonitor } from '@/components/Utility/Monitor';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'EyesightTest/LandoltRingImage',
  component: LandoltRingImage,
};
export default meta;

// Storyの定義
type Story = StoryObj<LandoltRingImageProps>;

export const Basic: Story = {
  args: {
    direction: 'up',
    distance: 3,
    eyesight: 1.0,
  },
  render: function Render({ ...args }) {
    args.monitor = useMonitor().monitor;
    return <LandoltRingImage {...args}></LandoltRingImage>;
  },
};
