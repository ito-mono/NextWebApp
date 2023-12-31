import { Meta, StoryObj } from '@storybook/react';
import LandoltRingImage, { LandoltRingImageProps } from './LandoltRingImage';

// メタデータの定義とexport default
const meta: Meta = {
  title: 'LandoltRingImage',
  component: LandoltRingImage,
};
export default meta;

// Storyの定義
type Story = StoryObj<LandoltRingImageProps>;

export const Primary: Story = {
  args: {
    direction: 'up',
    size: 'md',
  },
};
